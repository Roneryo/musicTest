        // Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyB0gTFhfuDSjCWWZjJjgEiGLQA-nTgOa5o",
          authDomain: "modulofirebasexd.firebaseapp.com",
          databaseURL: "https://modulofirebasexd.firebaseio.com",
          projectId: "modulofirebasexd",
          storageBucket: "modulofirebasexd.appspot.com",
          messagingSenderId: "358384949118",
          appId: "1:358384949118:web:971747cbf8e42436ffc52f"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log(firebase.app().name);
      var database = firebase.database();
      // The above is shorthand for:
      // var database = firebase.database(app);

      var ref = firebase.database().ref("Personas");
      ref.once("value")
          .then(function(snapshot){
          var name = snapshot.child("/").val(); // {first:"Ada",last:"Lovelace"}
          // var firstName = snapshot.child("name/first").val(); // "Ada"
          // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
          // var age = snapshot.child("age").val(); // null                
          console.log(name);
      })