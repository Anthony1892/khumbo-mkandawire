export async function handler(event) {
  try {
    const { order } = JSON.parse(event.body);

    console.log("Incoming order payload:", order);
    console.log("OWNER_EMAIL:", process.env.OWNER_EMAIL);
    console.log("RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@yourdomain.com",   // can also be env if you want flexibility
        to: process.env.OWNER_EMAIL,
        subject: `New Order: ${order.artifact}`,
        text: `Customer: ${order.customerName}
Email: ${order.email}
Quantity: ${order.quantity}
Notes: ${order.notes || "None"}`,
      }),
    });

    console.log("Resend API response status:", response.status);

    if (response.ok) {
      const data = await response.json();
      console.log("Resend API success response:", data);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Order email sent!" }),
      };
    } else {
      const errorText = await response.text();
      console.error("Resend API error response:", errorText);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to send email", error: errorText }),
      };
    }
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Unexpected error", error: err.message }),
    };
  }
}
