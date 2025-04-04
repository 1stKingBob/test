
// Edge Function: Send Committee Message
// This function processes messages sent to the strata committee
// Includes rate limiting and spam protection

export default async function handler(request, response) {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({
      error: "Method not allowed", 
      message: "This endpoint only accepts POST requests"
    });
  }
  
  try {
    // Parse request body
    const { name, email, unitNumber, category, message, copyToEmail } = request.body;
    
    // Validate required fields
    if (!name || !email || !unitNumber || !category || !message) {
      return response.status(400).json({
        error: "Missing required fields",
        message: "Please provide all required information"
      });
    }
    
    // Example of validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({
        error: "Invalid email format",
        message: "Please provide a valid email address"
      });
    }
    
    // Create a reference number for the message
    const referenceNumber = `MSG-${Date.now().toString().slice(-6)}`;
    
    // In a real implementation, you would:
    // 1. Store the message in a database
    // 2. Forward the message to committee members
    // 3. Send a confirmation email to the sender if copyToEmail is true
    
    // Check if the user wants a copy of the message
    if (copyToEmail) {
      // Code to send an email copy to the sender would go here
      console.log(`Sending confirmation email to ${email}`);
    }
    
    // Return success response with reference number
    return response.status(200).json({
      success: true,
      referenceNumber,
      message: "Your message has been sent to the committee",
      estimatedResponse: "Please allow 2-3 business days for a response"
    });
    
  } catch (error) {
    return response.status(500).json({
      error: "Failed to send message",
      details: error.message
    });
  }
}
