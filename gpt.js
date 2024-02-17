import OpenAI from 'openai';

export default async function gpt(context, content){
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:[{"role": "system", "content": context}, {"role": "user", "content": content}],
    });
    let response = chatCompletion.choices[0].message;
    console.log(response)
    return response;
}