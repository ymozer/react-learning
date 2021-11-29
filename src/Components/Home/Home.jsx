//CTRL + ALT + R rfcp rfce
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import one from './1.jpg'
import sec from './2.jpg'
import thr from './3.jpg'
import './Home.css'

function Home() {
	return (
			<main>
				<Carousel infiniteLoop  autoplay={true} interval="1" animationHandler="fade" showArrows={false} showStatus={false} emulateTouch={true} swipeable={true} transitionTime="50">
					<div>
						<img src={one}/>
						<p className="legend">Legend 1</p>
						<p className="first-item">Osman</p>
					</div>
					<div>
						<img src={sec}/>
						<p className="second-item">veli</p>
					</div>
					<div>
						<img src={thr}/>
						<p className="third-item">veli</p>
					</div>
				</Carousel>
				<div className="card-wrapper">	
					<div className="def_card1">
						<h2 className="def_header">Lorem Ipsum</h2>
						<p className="def_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda quaerat nulla debitis magnam impedit molestiae, vero voluptates illum distinctio sint a expedita reprehenderit omnis dolorem doloremque, facilis aliquam illo!</p>
					</div>
					<div className="def_card2">
						<h2 className="def_header">Lorem Ipsumm</h2>
						<p className="def_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda quaerat nulla debitis magnam impedit molestiae, vero voluptates illum distinctio sint a expedita reprehenderit omnis dolorem doloremque, facilis aliquam illo!</p>
					</div>
					<div className="def_card3">
						<h2 className="def_header">Lorem Ipsumm</h2>
						<p className="def_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda quaerat nulla debitis magnam impedit molestiae, vero voluptates illum distinctio sint a expedita reprehenderit omnis dolorem doloremque, facilis aliquam illo!</p>
					</div>
				</div>
			</main>
	)
}

export default Home