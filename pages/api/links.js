import { links } from '.././../data/links';

export default function handler(req, res) {
  res.status(200).json(links);
}
