const includeHTML = function () {
    /* Loop through a collection of all HTML elements: */
    const z = document.getElementsByTagName("*")
    for (let i = 0; i < z.length; i++) {
        let element = z[i]
        /*search for elements with a certain atrribute:*/
        let file = element.getAttribute("include-html")
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            let xhttp = new XMLHttpRequest()
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText
                    }
                    if (this.status == 404) {
                        element.innerHTML = "Page not found."
                    }
                    /* Remove the attribute, and call this function once more: */
                    element.removeAttribute("include-html")
                    includeHTML()
                }
            }
            xhttp.open("GET", file, true)
            xhttp.send()
            /* Exit the function: */
            return
        }
    }
}
export { includeHTML }
