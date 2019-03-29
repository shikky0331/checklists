export default async function handleReponse(response) {
  const json = await response.json()
  if (response.ok) return json
  if (json['error']) throw json['error']
  return response.statusText
}
