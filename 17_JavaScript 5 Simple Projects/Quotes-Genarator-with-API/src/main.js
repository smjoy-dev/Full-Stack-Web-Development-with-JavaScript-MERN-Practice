async function getQuote() {
    const el = document.getElementById('quote');
    el.textContent = 'Loading...';
    // button click korar sathe sathe (loading ashbe) text asbe - sync ,
    //kintu api theke data fetch korte somoy lage tai - async use kora hoy

    /*innerText → শুধু visible text নেয়/change করে, CSS দিয়ে hide করা text ignore করে।
      textContent → সব text নেয়/change করে, Hidden text ও নেয়, Faster than innerText।
      innerHTML → HTML tag সহ content read/change করে। P tag ke bold kora jabe <b> tag diye,
      ja innerText or textContent e kora jabe na.
    */

    // await korle promise create hoy, jar karon e try/catch use kora - good practice
    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();
        el.textContent = `${data.quote} — ${data.author}`;
    } catch (error) {
        el.textContent = "Error fetching quote";
    }
}