export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => { 
      // This will be an object representation of the html template.
      html.head.push(`<!-- Global site tag (gtag.js) - Google Analytics -->
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-D04NB524KR"></script>`)
        html.head.push(`<!-- Google Tag Manager -->
          <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D04NB524KR');
</script>`)
    //   html.head.push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />`)
      })
    // You can also intercept the response here.
    nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
})