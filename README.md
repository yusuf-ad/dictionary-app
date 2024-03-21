"You need to handle the styles first, or don't give most of them values from your head, try to create a reusable system."

const phoneticList =
phonetics.filter((item) => item.audio || item.text) ?? null;

const { audio } = phoneticList.length
? phoneticList.find((item) => item.audio)
: "";
const { text } = phoneticList.length
? phoneticList.find((item) => item.text)
: "";

for keyword section
