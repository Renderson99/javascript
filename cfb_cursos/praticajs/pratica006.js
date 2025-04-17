async function youtube() {
    try {
      const video = await fetch("https://www.youtube.com/results?search_query=async+await+javascript")
      console.log("deu certo") 
    } catch {
        console.log("erro")
    }
    
}