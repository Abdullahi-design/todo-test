
export const POST = async function (request) {
  const apiKey = process.env.TERMII_API_KEY;
  const URL = process.env.NEXT_PUBLIC_URL;
  
  const { 
    customerName,
    customerNumber,
    customerAddress,
    driverNumber,
    // foodId,
    // restaurantId,
  } = await request.json();

  const options = {
    method: 'POST',
    url: 'https://api.ng.termii.com/api/sms/send',
    headers: {
      'Content-Type': ['application/json', 'application/json']
    }
      
  };


  try {
    const data = {
      to: customerNumber,
      from: 'ziype',
      sms:`Hi ${customerName}, Your order is being packed and on its way. to ${customerAddress}! For inquiries or assistance, call your driver at ${driverNumber}. Thank you, Ziype.`,
      type:"plain",
      api_key: apiKey,
      channel:"generic",  
    };

    const TermiiResponse = await fetch(options.url, {
      ...options,
      body: JSON.stringify(data),
    });


    const TermiiResult = await TermiiResponse.json();

    console.log(TermiiResult); 

    return new Response(JSON.stringify(TermiiResult), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to create a new product", { status: 500 });
  }
}