// if element exist by id
window.IfExist = function IfExist(id, func) {
    let elem = document.getElementById(id);
    if (elem) {
        func(elem);
    }
}
// click event
window.ClickAction = function ClickAction(id, clickFun) {
    IfExist(id, (elem) => {
        elem.addEventListener('click', (e) => {
            clickFun(e, elem);
        });
    });
}
// load file js
window.loadJS = function loadJS(file) {
    let urlJS = `/js/${file}`;
    if (document.querySelector(`script[src="${urlJS}"]`)) {
        return;
    }
    var newscript = document.createElement('script');
         newscript.type = 'text/javascript';
         newscript.async = true;
         newscript.src = urlJS;

    document.getElementsByTagName('body')[0].appendChild(newscript);
}
window.loadContent = function loadContent(id, url, fileJS) {
    IfExist(id, (elem) => {
        if (elem.dataset.url === undefined || elem.dataset.url !== url) {
            elem.innerHTML = '';
            elem.innerHTML = `
                <div class="d-flex justify-content-center">
                    <div class="spinner-border m-5" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            `;
            loadJS(fileJS);
            axios.get(`/modals/${url}`)
                .then(res => {
                    if (res.status === 200) {
                        elem.innerHTML = '';
                        elem.innerHTML = res.data;
                        elem.setAttribute('data-url', url);
                        console.log(res.data);
                    }
                })
                .catch(err => {
                    console.log(err.response);
                });
        }
    });
}