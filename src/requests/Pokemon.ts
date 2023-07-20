export const getAPokemon = async (url: string) => {
  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error('Error getting a pokemon');
  }
};
