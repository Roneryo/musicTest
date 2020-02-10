// alert("Logre funcionar!");
async function fetchAudio(word) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let url = 'https://api.deezer.com/track/3135556';
    // fetch() returns a promise that
    // resolves once headers have been received
    return fetch(url, requestOptions)
      .then(res => {
        if (!res.ok)
          throw new Error(`${res.status} = ${res.statusText}`);
        // response.body is a readable stream.
        // Calling getReader() gives us exclusive access to
        // the stream's content
        var reader = res.body.getReader();
        // read() returns a promise that resolves
        // when a value has been received
        return reader
          .read()
          .then((result) => {
            return result;
          });
      })
  }
  fetchAudio("word")
    .then((response) => {
      // response.value for fetch streams is a Uint8Array
      var blob = new Blob([response.value], { type: 'audio/mp3' });
      var url = window.URL.createObjectURL(blob)
      window.audio = new Audio();
      window.audio.src = url;
      window.audio.play();
    })
    .catch((error) => {
    console.log(error.message); 
    });