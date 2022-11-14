import './Layout.css';
import  Story  from '../Story';
import  Post  from '../Post';
import  Post2  from '../Post2';
import  Post3  from '../Post3';

export default function Layout() {
    return (
        <div>
            <div className="MainGrid">
                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box">
                        <Story />
                    </div>

                    <div className="box" style={{ margin: "30px 0px" }}>
                        <Post />
                    </div>
                    <div className="box" style={{ margin: "30px 0px" }}>
                        <Post2 />
                    </div>
                    <div className="box" style={{ margin: "30px 0px" }}>
                        <Post3 />
                    </div>
                </div>


                <div style={{ gridArea: "secondColumn" }} >
                    <div className="sugestaoBox">
                    </div>
                </div>
            </div>
        </div>
    )
}

