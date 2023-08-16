import { Link } from "react-router-dom"

export default function ItemList(props) {
    var data = props.data
    var topic = encodeURIComponent(props.topic)
    var active = props.active
    return (
        <div className="col-sm-6 p-r-25 p-r-15-sr991">
            {/* Item latest */}
            <div className="m-b-45">
                <Link to={'/detail?active='+ active +'&title='+ topic +'&url=' +  data.link} className="wrap-pic-w hov1 trans-03">
                    <img src={data.description} alt="IMG" />
                </Link>
                <div className="p-t-16">
                    <h5 className="p-b-5">
                        <Link to={'/detail?active='+ active +'&title='+ topic +'&url=' +  data.link} className="f1-m-3 cl2 hov-cl10 trans-03">
                            {data.title}
                        </Link>
                    </h5>
                    <span className="cl8">
                        <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            
                        </a>
                        <span className="f1-s-3 m-rl-3">
                            
                        </span>
                        <span className="f1-s-3">
                            {data.pubDate}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
