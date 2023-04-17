const App = () => {
    return (
        <div>
          <TweetComponent
            name="Matt Lane"
            username="mmmaaatttttt"
            date={new Date().toDateString()}
            message="This app will disrupt everything!!"
          />
          <TweetComponent
            name="Elie Schoppik"
            username="eschoppik"
            date={new Date().toDateString()}
            message="#Ilovehashtags"
          />
          <TweetComponent
            name="Tim Garcia"
            username="TimGarcia0"
            date={new Date().toDateString()}
            message="Follow me on Twitter!"
          />
        </div>
      );
  }