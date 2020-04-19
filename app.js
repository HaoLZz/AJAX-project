console.log("Hello");

document.getElementById('button').addEventListener('click', loadText);

        function loadText(){
            const xhr = new XMLHttpRequest();
            console.log(xhr);
            xhr.open('GET', 'CET-4.txt',true);
            xhr.onload = function(){
                if (this.status === 200) {
                    console.log(this.responseText);
                    document.getElementById('text').innerHTML = this.responseText;
                }
            }
            // sends request
            xhr.send();
        }