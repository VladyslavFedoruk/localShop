    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("#modalForm");
        const dataTable = document.querySelector(".userTable");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullNameInput = form.querySelector('.fullNameInput');
            const citySelect = form.querySelector('#city-select');
            const addressInput = form.querySelector('.addressInput');
            const paymentMethod = form.querySelector('input[name="contact"]:checked');
            const productQuantityInput = form.querySelector('.counterInput');
            const commentsTextarea = form.querySelector('textarea');

            const fullName = fullNameInput.value.trim();
            const city = citySelect.value;
            const address = addressInput.value.trim();
            const payment = paymentMethod ? paymentMethod.value : "";
            const productQuantity = productQuantityInput.value.trim();
            const comments = commentsTextarea.value.trim();


            if (fullName === "" || address === "" || productQuantity === "") {
                alert("Будь-ласка, перевірте заповненість полів");
                return;
            }



            const tableHtml = `
                <table>
                    <tr><td>ПІБ:</td><td>${fullName}</td></tr>
                    <tr><td>Місто:</td><td>${city}</td></tr>
                    <tr><td>Склад Нової пошти:</td><td>${address}</td></tr>
                    <tr><td>Спосіб оплати:</td><td>${payment}</td></tr>
                    <tr><td>Кількість продукції:</td><td>${productQuantity}</td></tr>
                    <tr><td>Побажання або коментар:</td><td>${comments}</td></tr>
                </table>
            `;

            dataTable.innerHTML = tableHtml;
            dataTable.style.display = "block";
            modal.style.display = "none";
        });

        document.addEventListener("click", function (e) {
            if (!dataTable.contains(e.target)) {
                dataTable.style.display = "none";
                body.classList.remove('active');
            }
        });
    });