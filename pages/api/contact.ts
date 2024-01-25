import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next/types";

const BOT_TOKEN = process.env.NEXT_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_CHAT_ID;

const getConfig = (body: any) => {
  return {
    baseURL: "https://api.telegram.org",
    params: {
      text: `Text: ${body.data.text}`,
      chat_id: CHAT_ID,
    },
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed.");
    return;
  }

  const body = JSON.parse(req.body);
  const config = getConfig(body);
  const url = `bot${BOT_TOKEN}/sendMessage`;

  try {
    await axios.post(url, {}, config);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(400).json({ message: "Message sent fail" });
  }
}
