
document.getElementById('langSwitchButton').addEventListener('click', function() {
    const elements = document.querySelectorAll('[data-lang]');
    const currentLang = this.innerText;
    const newLang = currentLang === 'RU' ? 'EN' : 'RU';
    this.innerText = newLang;

    const translations = {
        'RU': {
            'О себе': 'О себе',
            'Навыки': 'Навыки',
            'Образование': 'Образование',
            'Контакты': 'Контакты',
            'Я студентка СГУ им. Питирима Сорокина - Тримаруш Мария': 'Я студентка СГУ им. Питирима Сорокина - Тримаруш Мария',
            'Категория': 'Категория',
            'Технические навыки': 'Технические навыки',
            'Управленческие навыки': 'Управленческие навыки',
            'Коммуникации': 'Коммуникации',
            'МАОУ СОШ №4, среднее общее образование': 'МАОУ СОШ №4, среднее общее образование',
            'МАОУ Технический лицей, образование в области медицины': 'МАОУ Технический лицей, образование в области медицины',
            'Свяжитесь со мной': 'Свяжитесь со мной',
            'Имя:': 'Имя:',
            'Email:': 'Email:',
            'Сообщение:': 'Сообщение:',
            'Отправить': 'Отправить',
            'Опрос': 'Опрос',
            'Возраст:': 'Возраст:',
            'Укажите ваш пол:': 'Укажите ваш пол:',
            'М': 'М',
            'Ж': 'Ж',
            'Выберите ваши интересы:': 'Выберите ваши интересы:',
            ' Чтение книг(?)': ' Чтение книг(?)',
            ' Просмотр фильмов/сериалов': ' Просмотр фильмов/сериалов',
            ' Я анимешница': ' Я анимешница',
            'УТРОМ ПРЕСС КАЧАТ--': 'УТРОМ ПРЕСС КАЧАТ--',
            ' Я нормальный человек и трачу всё свободное время на ютуб, тик-ток и другую подобную х--': ' Я нормальный человек и трачу всё свободное время на ютуб, тик-ток и другую подобную х--',
            ' Что-то другое, что мне уже лень писать...': ' Что-то другое, что мне уже лень писать...',
            ' Люблю сидеть всю ночь и делать сайт, который увидят 2,5 человека': ' Люблю сидеть всю ночь и делать сайт, который увидят 2,5 человека',
            'Добавить новое поле для интересов': 'Добавить новое поле для интересов',
            'Введите текст нового интереса:': 'Введите текст нового интереса:',
            'Сохранить': 'Сохранить',
            'Отмена': 'Отмена',
            'Комментарий:': 'Комментарий:'
        },
        'EN': {
            'О себе': 'About Me',
            'Навыки': 'Skills',
            'Образование': 'Education',
            'Контакты': 'Contacts',
            'Я студентка СГУ им. Питирима Сорокина - Тримаруш Мария': 'I am a student at Pitirim Sorokin University - Trimarush Maria',
            'Категория': 'Category',
            'Технические навыки': 'Technical Skills',
            'Управленческие навыки': 'Management Skills',
            'Коммуникации': 'Communication',
            'МАОУ СОШ №4, среднее общее образование': 'MAOU School №4, general secondary education',
            'МАОУ Технический лицей, образование в области медицины': 'MAOU Technical Lyceum, education in the field of medicine',
            'Свяжитесь со мной': 'Contact Me',
            'Имя:': 'Name:',
            'Email:': 'Email:',
            'Сообщение:': 'Message:',
            'Отправить': 'Send',
            'Опрос': 'Survey',
            'Возраст:': 'Age:',
            'Укажите ваш пол:': 'Specify your gender:',
            'М': 'M',
            'Ж': 'F',
            'Выберите ваши интересы:': 'Select your interests:',
            ' Чтение книг(?)': ' Reading Books(?)',
            ' Просмотр фильмов/сериалов': ' Watching Movies/Series',
            ' Я анимешница': ' I am an anime fan',
            ' УТРОМ ПРЕСС КАЧАТ--': ' MORNING PRESS--',
            ' Я нормальный человек и трачу всё свободное время на ютуб, тик-ток и другую подобную х--': ' I am a normal person and spend all my free time on YouTube, TikTok, and similar things',
            ' Что-то другое, что мне уже лень писать...': ' Something else that I\'m too lazy to write...',
            ' Люблю сидеть всю ночь и делать сайт, который увидят 2,5 человека': ' I love staying up all night making a website that will be seen by 2.5 people',
            'Добавить новое поле для интересов': 'Add a new interest field',
            'Введите текст нового интереса:': 'Enter new interest text:',
            'Сохранить': 'Save',
            'Отмена': 'Cancel',
            'Комментарий:': 'Comment:'
        }
    };

    elements.forEach(el => {
        const text = el.getAttribute('data-lang');
        el.innerText = translations[newLang][text] || text;
    });
});




document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    if (name === "" || email === "" || message === "") {
        response.innerText = "Пожалуйста, заполните все поля!";
    } else if (!email.includes("@")) {
        response.innerText = "Пожалуйста, введите корректный email!";
    } else if (message.length < 10) {
        response.innerText = "Сообщение должно содержать минимум 10 символов!";
    } else {
        response.innerText = "Спасибо за обратную связь, " + name + "!";
    }
});

const commentField = document.getElementById('comment');
const charCountDisplay = document.getElementById('charCount');

commentField.addEventListener('input', () => {
    const currentLength = commentField.value.length;
    charCountDisplay.textContent = `${currentLength}/200`;
});

document.addEventListener("DOMContentLoaded", function() {
    const addInterestButton = document.getElementById("addInterestButton");
    const interestModal = document.getElementById("interestModal");
    const saveInterestButton = document.getElementById("saveInterestButton");
    const cancelInterestButton = document.getElementById("cancelInterestButton");
    const newInterestText = document.getElementById("newInterestText");
    const dynamicInterests = document.getElementById("dynamic-interests");
    const interestsForm = document.getElementById("interestsForm");
    const formOutput = document.getElementById("formOutput");

    function toggleModal(display) {
        interestModal.style.display = display;
        if (display === "none") newInterestText.value = "";
    }

    function createNewInterest(text) {
        const checkboxId = `interest-${Date.now()}`;
        const checkbox = `<input type="checkbox" name="interests" value="${text}" id="${checkboxId}">
                          <label for="${checkboxId}" class="size">${text}</label><br>`;
        dynamicInterests.insertAdjacentHTML('beforeend', checkbox);
    }

    addInterestButton.addEventListener("click", () => toggleModal("block"));
    cancelInterestButton.addEventListener("click", () => toggleModal("none"));

    saveInterestButton.addEventListener("click", () => {
        const interestText = newInterestText.value.trim();
        if (interestText) {
            createNewInterest(interestText);
            toggleModal("none");
        }
    });

    interestsForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const checkboxes = document.querySelectorAll('#interestsForm input[name="interests"]');
        const isChecked = Array.from(checkboxes).some(x => x.checked);
        const name = document.getElementById("name1").value;
        const age = document.getElementById("age1").value;
        const comment = document.getElementById("comment").value;
        const response = document.getElementById("response1");

        if (name === "" || age === "") {
            response.innerText = "Пожалуйста, заполните все поля!";
        } else if (!isChecked) {
            response.innerText = "Нужно выбрать хотя бы один интерес!";
        } else {
            response.innerText = "Спасибо за обратную связь, " + name + "!";

            let output = "<h3>Введенные данные:</h3>";
            output += `<p><strong>Имя:</strong> ${name}</p>`;
            output += `<p><strong>Возраст:</strong> ${age}</p>`;

            const gender = document.querySelector('input[name="gender"]:checked');
            if (gender) {
                output += `<p><strong>Пол:</strong> ${gender.nextElementSibling.textContent}</p>`;
            }

            output += "<h4>Интересы:</h4>";
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const label = document.querySelector(`label[for="${checkbox.id}"]`);
                    output += `<p>${label ? label.textContent : checkbox.value}</p>`;
                }
            });

            if (comment.length > 0) {
                output += `<br><p><strong>Комментарий:</strong> ${comment}</p>`;
            }

            formOutput.innerHTML = output;
            
        }
    });
});

