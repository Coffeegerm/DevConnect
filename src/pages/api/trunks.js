// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res
    .status(200)
    .json({
      data: [
        {
          id: 1,
          text: "Testing out this new app!",
          code: "<div><p>hey there</p></div>",
        },
      ],
    });
};
