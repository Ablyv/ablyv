const ai = require('openai');

async function gptSummary(context, content){
    const openai = new ai.OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:[{"role": "system", "content": context}, {"role": "user", "content": content}],
    });
    return chatCompletion.choices[0].message;
}

module.exports = gptSummary;