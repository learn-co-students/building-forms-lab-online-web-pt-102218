const createBand = name => ({
  type: "CREATE_BAND",
  band: {
    name : name
  }
})

export default createBand