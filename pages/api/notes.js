// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json([
    {
      content: '<h1>hahalol</h1>',
      title: 'One'
    },
    {
      content: 'what',
      title: 'Two'
    },
    {
      content: 'what',
      title: 'Three'
    },
    {
      content: 'what',
      title: 'Four'
    },
    {
      content: '<script>console.log("dont let this code run!")</script>',
      title: 'Five'
    },
    {
      content: 'what',
      title: 'Six'
    },
    {
      content: 'what',
      title: 'Seven'
    },
    {
      content: 'what',
      title: 'Eight'
    },
    {
      content: 'what',
      title: 'Nine'
    },
    {
      content: 'what',
      title: 'Ten'
    },
  ])
}
