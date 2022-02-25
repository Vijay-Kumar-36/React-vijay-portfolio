import React from 'react'
import './style.css'
export const Contact = () => {
    return ( <
        div >
        <
        section className = "contact"
        id = "contact" >
        <
        h1 className = "heading" > Contact Me < /h1> <
        div className = "row" >
        <
        div className = "content" >
        <
        h3 className = "title" > Contact Info < /h3> <
        div className = "info" >
        <
        h3 > < i className = "fas fa-envelope" / > vijaykumarvk0636 @gmail.com < /h3> <
        h3 > < i className = "fas fa-phone" / > 91 + 1234567890 < /h3> <
        h3 > < i className = "fas fa-phone" / > +111 - 222 - 3333 < /h3> <
        h3 > < i className = "fas fa-map-marker-alt" / > Erode, india - 638454. < /h3> <
        /div> <
        div className = "social-menu" >
        <
        ul >
        <
        li > < a href = ""
        target = "blank" > < i className = "fab fa-github" / > < /a></li >
        <
        li > < a href = ""
        target = "blank" > < i className = "fab fa-instagram" / > < /a></li >
        <
        li > < a href = ""
        target = "blank" > < i className = "fab fa-linkedin-in" / > < /a></li > { /* <li><a href="https://codepen.io/sanketbodke"><i className="fab fa-codepen" target="blank" /></a></li> */ } <
        /ul> <
        /div> <
        /div> <
        form action >
        <
        input type = "text"
        placeholder = "name"
        className = "box" / >
        <
        input type = "email"
        placeholder = "email"
        className = "box" / >
        <
        input type = "text"
        placeholder = "project"
        className = "box" / >
        <
        textarea name id cols = { 30 }
        rows = { 10 }
        className = "box message"
        placeholder = "message"
        defaultValue = { "" }
        /> <
        button type = "submit"
        className = "btn"
        onClick = {
            (e) => { e.preventDefault(); } } > send < i className = "fas fa-paper-plane" / > < /button> <
        /form> <
        /div> <
        /section> <
        a href = "#home"
        class = "top" >
        <
        img src = "images/scroll-top-img.png"
        alt = "" / >
        <
        /a>

        <
        /div>
    )
}