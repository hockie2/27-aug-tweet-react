let timeConverted = function(time) {
    let sometime = new Date(time)
    console.log(sometime)
    var day, hour, minute, seconds;
    seconds = Math.floor(time / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;

    let date = sometime.getDate();
    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month = monthArray[sometime.getMonth()]
    if (day > 0) {
        return `${date} days ago`
    } else {
        if (hour > 0) {
            return `${hour} hours ago`;
        } else {
            return `${minute} mins ago`;
        }
    }


}


class Time extends React.Component {
    render(){
        let time = Date.parse(this.props.time)

        time = Date.parse(new Date()) - time
        time = timeConverted(time)
        return (
            <span>
                {time}
            </span>
            )
    }
}

class User extends React.Component {
    render(){

        return (
            <div className="user_wrapper">
                <img src={this.props.user.profile_image_url}/>
                <h3>{this.props.user.name}</h3>
                <h3>@{this.props.user.screen_name}</h3>
                <Time time={this.props.user.created_at}/>
            </div>
            )
    }
}


class Entity extends React.Component {

                render() {

                    return (

                        <div>
                            <div>
                                {this.props.tweet.text}
                            </div>
                            <div>
                                Retweet Count: {this.props.tweet.retweet_count}&#183;
                                Favourite: {this.props.tweet.favorite_count}
                            </div>
                        </div>

                    );
                }
            }


class List extends React.Component {
                render() {
                    // console.log("inside of component:", this.props.items );
                    let itemsElements = this.props.items.map( (tweet) => {
                              return <div className = "card">

                              <User user={tweet.user}/>

                              <Entity tweet={tweet}/>
                              </div>
                            });


                    // console.log( "items elemetns",itemsElements );
                    return (
                      <ul>
                        {itemsElements}
                      </ul>
                    );
                }
            }



ReactDOM.render(
    <div>
      <List items={tweets} />
    </div>,
    document.getElementById('root')
);
