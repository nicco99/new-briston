import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="navigation clearfix">
        <li>
          <Link href="/">Home</Link>
          <ul></ul>
        </li>
        <li className="dropdown">
          <Link className="" href="#">
            Company
          </Link>
          <ul>
            <li className="dropdown">
              <Link href="/about-2">About Us</Link>
              {/* <ul>
                <li>
                  <Link href="/about-2">About Style 01</Link>
                </li>
              </ul> */}
            </li>
            <li className="dropdown">
              <Link href="/team-1">Meet Our Team</Link>
              {/* <ul>
                <li>
                  <Link href="/team-1">Team Style 01</Link>
                </li>
              </ul> */}
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Services</Link>
          <ul>
            <li>
              <Link href="/services">Our All Services</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Pages</Link>
          <ul>
            {/* <li>
              <Link href="/career">Career</Link>
            </li> */}
            <li className="dropdown">
              <Link href="/contact-1">Contact</Link>
              {/* <ul>
                <li>
                  <Link href="/contact-1">Contact Style 01</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="/faq">FAQ’s</Link>
            </li>

            <li className="dropdown">
              <Link href="/testimonial-1">Testimonial</Link>
              {/* <ul>
                <li>
                  <Link href="/testimonial-1">Testimonial Style 01</Link>
                </li>
              </ul> */}
            </li>
          </ul>
        </li>
        {/* <li className="dropdown">
          <Link href="#">Portfolio</Link>
          <ul>
            <li className="dropdown">
              <Link href="#">Portfolio Grid</Link>
              <ul>
                <li>
                  <Link href="/portfolio-1">Grid View 01</Link>
                </li>
                <li>
                  <Link href="/portfolio-2">Grid View 02</Link>
                </li>
                <li>
                  <Link href="/portfolio-3">Grid View 03</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/portfolio-4">Portfolio Masonry</Link>
            </li>
            <li>
              <Link href="/portfolio-details">Portfolio Details</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/contact-1">Contact</Link>
          <ul>
            {/* <li className="dropdown">
              <Link href="#">Blog Grdi View</Link>
              <ul>
                <li>
                  <Link href="/blog-4">Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog-5">Right Sidebar</Link>
                </li>
              </ul>
            </li> */}
            {/* <li className="dropdown">
              <Link href="#">Blog List View</Link>
              <ul>
                <li>
                  <Link href="/blog-6">Full Width</Link>
                </li>
                <li>
                  <Link href="/blog-7">Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog-8">Right Sidebar</Link>
                </li>
              </ul>
            </li> */}
            {/* <li className="dropdown">
              <Link href="#">Single Post</Link>
              <ul>
                <li>
                  <Link href="/blog-details">With Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog-details-2">Without Sidebar</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/jobs">Jobs</Link>
          <ul>
            <li>
              <Link href="/jobs">jobs</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
