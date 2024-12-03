export async function GET(request: Request) {
  console.log("Calling test api request");
  return Response.json({ test: 123 });
}
