import React from "react";
/* import "./container.css"; */

function Bloghomecontainer() {
	return (
		<jumbotron>
			<div className="page-wrapper">
				<div className="post-slider">
					<h1 className="slider-title">Latest Post</h1>
					<i className="fas fa-chevron-left prev"></i>
					<i className="fas fa-chevron-right next"></i>
					<div className="post-wrapper">
					</div>
				</div>
				<div className="content clearfix">
					<div className="main-content">
						<h1 className="recent-post-title">Recent Post</h1>
						<div className="post">
							<img src="images/bg1.jpg" className="post-image" alt="" />
							<div className="post-preview">
								<h2><a href="blog.html">All About Safety</a></h2>
								<i className="far fa-user">Adesola</i>
								&nbsp;
					<i className="far fa-calender">May, 5th, 2018</i>
								<p className="preview-text">This blogpage would be maintained by a transport safety professional. He would be expected to build a followership population of truckers and trucking business owners.  The feature would allow users to be able to post safety ideas and experiences.

						</p>
								<a href="blog1.html" className="btn read-more">Read More...</a>
							</div>
						</div>
						<div className="post">
							<img src="images/bg1.jpg" className="post-image" alt="" />
							<div className="post-preview">
								<h2><a href="blog.html">The Truck Doctor</a></h2>
								<i className="far fa-user">Adesola</i>
								&nbsp;
					<i className="far fa-calender">May, 5th, 2018</i>
								<p className="preview-text">This blogpage would be maintained by a professional mechanic with extensive experience in truck repairs discussing topics related to truck repairs and maintenance. How to keep trucks healthy and avoid unnecessary expenses and so on.
						</p>
								<a href="blog1.html" className="btn read-more">Read More...</a>
							</div>
						</div>
						<div className="post">
							<img src="images/bg1.jpg" className="post-image" alt="" />
							<div className="post-preview">
								<h2><a href="blog.html">The Truckers CPA</a></h2>
								<i className="far fa-user">Adesola</i>
								&nbsp;
					<i className="far fa-calender">May, 5th, 2018</i>
								<p className="preview-text">This blogpage would be maintained by a professional accountant with experience in the trucking industry to frequently treat issues around taxes and fees for truckers. Discuss finance issues for truckers around expenses and profitability and so on

						</p>
								<a href="blog1.html" className="btn read-more">Read More...</a>
							</div>
						</div>
						<div className="post">
							<img src="images/bg1.jpg" className="post-image" alt="" />
							<div className="post-preview">
								<h2><a href="blog.html">A day in the Life of a Truck Driver</a></h2>
								<i className="far fa-user">Adesola</i>
								&nbsp;
					<i className="far fa-calender">May, 5th, 2018</i>
								<p className="preview-text">This blog would be about the real life day to day living of a current trucker with a lot of experience and who is still actively driving telling his daily stories about all that happens on the road. He would be allowed to tell stories from other truckers who are willing to allow him do that.
						</p>
								<a href="blog1.html" className="btn read-more">Read More...</a>
							</div>
						</div>
					</div>
					<div className="sidebar">
						<div className="section search">
							<h2 className="section-title">Search Post</h2>
							<form action="index.php" method="post">
								<input type="text" name="search" className="text-input" placeholder="Search recent post" />
							</form>
						</div>
						<div className="section topics">
							<h3 className="section-title">Blogs</h3>
							<ul>
								<li><a href="#">All About Safety</a></li>
								<li><a href="#">The Truck Doctor</a></li>
								<li><a href="#">Truck CPA</a></li>
								<li><a href="#">A day in the life of a truck Driver</a></li>
							</ul>
							<h3 className="section-title">Useful Links</h3>
							<ul>
								<li><a href="#">Mystery</a></li>
								<li><a href="#">Long Distance Driving</a></li>
								<li><a href="#">Disaster prevention</a></li>
								<li><a href="#">Staying Alive</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div >
		</jumbotron>
	)
}

export default Bloghomecontainer;

