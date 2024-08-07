export default interface ICharacter {
  gender: string;
  id: number;
  image: string;
  name: string;
  status: string;
  created: string;
  episode: string[];
  location: { name: string; url: string };
  origin: { name: string; url: string };
  species: string;
  type: string;
}
