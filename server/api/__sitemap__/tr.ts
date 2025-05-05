export default defineEventHandler(async (event) => {
    try{

    
      const config = useRuntimeConfig();
      const domain = 'https://adis.talksolutions.dev';

      let response = [
        ...[
           '/',
        ].map(url => {
          return {
            loc: domain+url,
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 1
          }
        }),
      ];
      
      const apiKey = "5666d5e1ba99a8dac3863b7ba36535ae";
      const getData = (url,type = 'GET') => {
        return  $fetch(config.public.apiBase + url, {
          method: type,
          //body  : body,
        });
      };
      
      //customHeaders['kontent'] = `5666d5e1ba99a8dac3863b7ba36535ae`;
      await Promise.all([
        getData('tr/moduldata/sayfalar','POST').then(pages => {
            if(pages?.success){
              response = [
                ...response,
                ...[{
                  loc: domain,
                  lastmod: new Date().toISOString(),
                  changefreq: 'daily',
                  priority: 1
                }]
              ];
              for(let i = 0; i < pages?.data?.length; i++){
                const category = pages?.data[i];

                response = [
                  ...response,
                  ...[{
                    loc: domain+'/'+category.data.slug.tr,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: 1
                  }]
                ];

                
              }
            }

        })
      ]);

      return response;
    }catch (error) {
      console.error('Error fetching sitemap data:', error);
      return [];
    }
});