var Webflow = Webflow || [];
Webflow.push(function() {
    const tempId = $("html").attr("data-wf-page");
    $("[data-cms-modal]").click(function() {
        let link = $(this).find(".hidden-link").attr("href") + " #content";
        $("[data-remodal-id=modal]").remodal().open();
        $("#load-wrapper").load(link, function(response, status, xhr) {
            if (status == "success") {
                window.Webflow && window.Webflow.destroy();
                window.Webflow && window.Webflow.ready();
                window.Webflow && window.Webflow.require("ix2").init();
                document.dispatchEvent(new Event("readystatechange"));

                //Находим текущую карточку
                const name = $(".box-popup .h1-40").text();
                const card = $(
                    `.box-card-specialist .hidden-link:contains("${name}")`
                ).closest(".card-specialist");

                //Проверяем последняя ли карточка и скрываем стрелку вперёд
                if (card.index() === $(".card-specialist").length - 1) {
                    $(".next-cms").hide();
                }

                //Проверяем первая ли карточка и скрываем стрелку назад
                if (card.index() === 0) {
                    $(".prev-cms").hide();
                }

                //Next page
                $(".next-cms").click(function() {
                    $("#load-wrapper").empty();
                    card.next().find(`.hidden-link`).click();
                });

                //Prev page
                $(".prev-cms").click(function() {
                    $("#load-wrapper").empty();
                    card.prev().find(`.hidden-link`).click();
                });

                const swiper2 = new Swiper(".swiper-2", {
                    slidesPerView: "auto",
                    grabCursor: true,
                    spaceBetween: 10,
                    rewind: true,
                    navigation: {
                        nextEl: ".next-2",
                        prevEl: ".prev-2"
                    }
                });
                const swiper3 = new Swiper(".swiper-3", {
                    slidesPerView: "auto",
                    grabCursor: true,
                    spaceBetween: 10,
                    rewind: true,
                    navigation: {
                        nextEl: ".next-3",
                        prevEl: ".prev-3"
                    }
                });
                const swiper4 = new Swiper(".swiper-4", {
                    slidesPerView: "auto",
                    grabCursor: true,
                    spaceBetween: 10,
                    rewind: true,
                    navigation: {
                        nextEl: ".next-4",
                        prevEl: ".prev-4"
                    }
                });
                const swiper5 = new Swiper(".swiper-5", {
                    slidesPerView: "auto",
                    grabCursor: true,
                    spaceBetween: 10,
                    rewind: true,
                    navigation: {
                        nextEl: ".next-5",
                        prevEl: ".prev-5"
                    }
                });
                const swiper6 = new Swiper(".swiper-6", {
                    slidesPerView: "auto",
                    grabCursor: true,
                    spaceBetween: 10,
                    rewind: true,
                    navigation: {
                        nextEl: ".next-6",
                        prevEl: ".prev-6"
                    }
                });
                const swiper7 = new Swiper(".swiper-7", {
                    slidesPerView: "auto",
                    grabCursor: true,
                    spaceBetween: 10,
                    rewind: true,
                    navigation: {
                        nextEl: ".next-7",
                        prevEl: ".prev-7"
                    }
                });
                const swiper8 = new Swiper(".swiper-8", {
                    slidesPerView: "auto",
                    grabCursor: true,
                    navigation: {
                        nextEl: ".next-8",
                        prevEl: ".prev-8"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: "auto",
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: "auto",
                            spaceBetween: 20
                        }
                    }
                });
            }
        });
    });

    $(document).on("closed", ".remodal", function(e) {
        console.log("empty");
        $("#load-wrapper").empty();
    });
});

$(document).ready(function() {
    function handleWOpenState() {
        const selectList = $(".select-toggle").siblings(".select-list");

        if (selectList.hasClass("w--open")) {
            $(".wrapper-form-input").css("z-index", "9999999999");
        } else {
            $(".wrapper-form-input").css("z-index", "1");
        }
    }
    setInterval(handleWOpenState, 100);
    handleWOpenState();
});

const emailInputs = document.querySelectorAll(".form__email-field");
const moneyInputs = document.querySelectorAll(".form__money-field");


emailInputs.forEach((input) => {
    input.addEventListener("keypress", function(e) {
        if (
            e.keyCode != 8 &&
            e.keyCode != 46 &&
            (input.value.length > 49 || (e.key && e.key.match(/[^0-9a-zA-Z-_@.-\s]/)))
        )
            return e.preventDefault();
    });
    input.addEventListener("input", function(e) {
        if (e.inputType == "insertFromPaste") {
            input.value = input.value
                .replace(/[^0-9a-zA-Z-_@.-\s]/g, "")
                .slice(0, 50);
        }
    });
});

moneyInputs.forEach((input) => {
    //input.setAttribute('pattern', new RegExp('\d*'));
    input.addEventListener("keypress", function(e) {
        if (e.key && e.key.match(/[^0-9.]/)) return e.preventDefault();
        input.value = formatNumber(input.value);
        if (input.value.length) {
            toggleRequiredRadioMoney(true);
        } else {
            toggleRequiredRadioMoney(false);
        }
    });
    input.addEventListener("input", function(e) {
        input.value = formatNumber(input.value.replace(/[^0-9.]/g, ""));
        if (input.value.length) {
            toggleRequiredRadioMoney(true);
        } else {
            toggleRequiredRadioMoney(false);
        }
    });
});

function toggleRequiredRadioMoney(required) {
    if (required) {
        document.querySelectorAll(".form__money-radio input").forEach((radio) => {
            radio.setAttribute("data-required", "true");
            removeErrorClassOnInput(radio);
        });
    } else {
        document.querySelectorAll(".form__money-radio input").forEach((radio) => {
            radio.removeAttribute("data-required");
        });
    }
}

function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function removeErrorClassOnInput(input) {
    const currentForm = input.closest("form");
    input.addEventListener("input", () => {
        input.classList.remove("form__field-error");
        var dropdownInputWrapper = input.closest(".w-dropdown");
        if (dropdownInputWrapper) {
            var selectToggle = dropdownInputWrapper.querySelector(".select-toggle");
            selectToggle.classList.remove("form__field-error");
        }
        if (input.classList.contains("form__type-select")) {
            currentForm
                .querySelector(".form__field-tooltip--type")
                .classList.add("is--hidden");
        }
        if (input.classList.contains("form__field--bottom")) {
            currentForm
                .querySelector(".form__field-tooltip--bottom")
                .classList.add("is--hidden");
        }
    });
    if (input.type == "radio") {
        input.addEventListener("click", () => {
            if (currentForm.querySelectorAll(`[name=${input.dataset.name}]`).length) {
                currentForm
                    .querySelectorAll(`[name=${input.dataset.name}]`)
                    .forEach((radio) => {
                        radio.classList.remove("form__field-error");
                    });
                if (input.classList.contains("form__field--bottom")) {
                    currentForm
                        .querySelector(".form__field-tooltip--bottom")
                        .classList.add("is--hidden");
                }
            }
        });
    }

    input.addEventListener("focus", () => {});
}

function formValidation(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('.input, .select, [type="radio"]');

    inputs.forEach((input) => {
        const {
            value,
            dataset
        } = input;
        input.classList.remove("form__field-error");

        if (dataset.required === "true") {
            var dropdownInputWrapper = input.closest(".w-dropdown"),
                isTypeSelect = input.classList.contains("form__type-select"),
                isCitySelect = input.classList.contains("form__city-select"),
                isBottomField = input.classList.contains("form__field--bottom");

            if (dropdownInputWrapper)
                var selectToggle = dropdownInputWrapper.querySelector(".select-toggle");
            if (!value) {
                input.classList.add("form__field-error");
                if (selectToggle) {
                    selectToggle.classList.add("form__field-error");
                }
                if (isTypeSelect) {
                    form
                        .querySelector(".form__field-tooltip--type")
                        .classList.remove("is--hidden");
                }
                if (isCitySelect) {
                    form
                        .querySelector(".form__field-tooltip--type")
                        .classList.remove("is--hidden");
                }
                if (isBottomField) {
                    form
                        .querySelector(".form__field-tooltip--bottom")
                        .classList.remove("is--hidden");
                }
                isValid = false;
            }
            if (input.type == "radio") {
                if (!document.querySelector(`[name=${input.dataset.name}]:checked`)) {
                    document
                        .querySelectorAll(`[name=${input.dataset.name}]`)
                        .forEach((radio) => {
                            radio.classList.add("form__field-error");
                        });
                    if (selectToggle) {
                        selectToggle.classList.add("form__field-error");
                    }
                    if (isBottomField) {
                        document
                            .querySelector(".form__field-tooltip--bottom")
                            .classList.remove("is--hidden");
                    }
                }
            }
        }
    });

    return isValid;
}

//ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð¿Ð¾Ð»ÐµÐ¹ Ð²Ð²Ð¾Ð´Ð° Ð´Ð°Ñ‚Ñ‹
const dateInputs = document.querySelectorAll(".input.date");
const today = new Date();
const dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const mm =
    today.getMonth() + 1 < 10 ?
    "0" + (today.getMonth() + 1) :
    today.getMonth() + 1;
const yyyy = today.getFullYear();
const thh = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
const tmm =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();

dateInputs.forEach((input) => {
    input.setAttribute("type", "date");
    input.setAttribute("min", yyyy + "-" + mm + "-" + dd);
});

document.querySelector(".input.date-task-maked").value =
    dd + "-" + mm + "-" + yyyy + " " + thh + ":" + tmm;

//Ð”Ð¾Ð±Ð°Ð²Ð»ÑÐµÐ¼ Ð² Ð¿Ð¾Ð»Ðµ Ð²Ð²Ð¾Ð´Ð° URL Ð°Ð´Ñ€ÐµÑ ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ†Ñ‹
const urlInput = document.querySelector(".input.url");
urlInput.value = window.location;

function checkValidationFormOnSubmit(formClassName, isNeedToSendEvent) {
    const form = document.querySelector(formClassName);
    const inputs = form.querySelectorAll('.input, .select, [type="radio"]');
    const onSubmitHandler = (event) => {
        if (formValidation(form)) {
            if (isNeedToSendEvent) {
                fbq("track", "Lead");
                ym(93740751, 'reachGoal', 'findPerfLead')
            }
            return true;
        } else {
            form.querySelector(".submit-button").value = "Kirim permintaan";
            return false;
        }
    };

    inputs.forEach((input) => {
        removeErrorClassOnInput(input);
    });

    $(formClassName).submit(onSubmitHandler);
}

if ($("#wf-form-Make-request-form").length) {
    checkValidationFormOnSubmit("#wf-form-Make-request-form", true);
    $("#wf-form-Make-request-form").attr("novalidate", "");
}

if ($("#wf-form-Make-request-form-find-2").length) {
    checkValidationFormOnSubmit("#wf-form-Make-request-form-find-2", true);
    $("#wf-form-Make-request-form-find-2").attr("novalidate", "");
}

if ($("#wf-form-BecomePerformerForm").length) {
    checkValidationFormOnSubmit("#wf-form-BecomePerformerForm", false);
    $("#wf-form-BecomePerformerForm").attr("novalidate", "");
}

$('[data-select="form-type"]').on("change", function() {
    var formType = $(this).val(),
        currentForm = $(this).closest("form"),
        moneyRadioFields = currentForm.find(".form__money-radio"),
        subjectField = currentForm.find(".form__subject-field"),
        bodyField = currentForm.find(".form__body-field"),
        bodyFieldTooltip = currentForm.find(".tooltip-text-area"),
        citySelectField = currentForm.find(".form__sity-select"),
        citySelectDrodown = currentForm.find(".form__city-field-dd");

    switch (formType) {
        case "Fotografer":
            bodyFieldTooltip.find(".is--teacher-content").addClass("is--hidden");
            bodyFieldTooltip
                .find(".is--photograph-content")
                .removeClass("is--hidden");
            bodyFieldTooltip.removeClass("is--hidden");
            citySelectDrodown.removeClass("form__field-hide");
            citySelectDrodown.find('select').attr("data-required", "true");
            subjectField.attr("placeholder", "Misalnya, pemotretan pernikahan");
            bodyField.attr(
                "placeholder",
                "Contoh: pemotretan pernikahan di luar kota di pedesaan. Rencana waktu yang dibutuhkan adalah sekitar 3 jam untuk fotografer ditambah perjalanan."
            );
            if ($('[data-hide="photographer"]').length) {
                $('[data-hide="photographer"]').each(function() {
                    $(this).remove();
                });
            }
            moneyRadioFields.each(function(i, el) {
                if ($(el).attr("data-photographer") != "true") {
                    $(el).addClass("hidden");
                    $(el)
                        .find("input")
                        .removeAttr("data-required")
                        .prop("checked", false);
                } else {
                    $(el).removeClass("hidden");
                    if ($(".form__money-field").val()) {
                        $(el).find("input").attr("data-required", "true");
                    }
                }
            });
            break;
        case "Desainer":
            bodyFieldTooltip.find(".is--teacher-content").addClass("is--hidden");
            bodyFieldTooltip.find(".is--photograph-content").addClass("is--hidden");
            bodyFieldTooltip.addClass("is--hidden");
            citySelectDrodown.addClass("form__field-hide");
            citySelectDrodown.find('select').removeAttr("data-required");
            subjectField.attr("placeholder", "Misalnya, seorang ilustrator");
            bodyField.attr(
                "placeholder",
                "Contoh: Pesanannya adalah mengilustrasikan buku cerita anak-anak. Anda membutuhkan 20 gambar dengan detail sedang. Cat air, guas atau tinta."
            );
            moneyRadioFields.each(function(i, el) {
                if ($(el).attr("data-designer") != "true") {
                    $(el).addClass("hidden");
                    $(el)
                        .find("input")
                        .removeAttr("data-required")
                        .prop("checked", false);
                } else {
                    $(el).removeClass("hidden");
                    if ($(".form__money-field").val()) {
                        $(el).find("input").attr("data-required", "true");
                    }
                }
            });
            if ($('option[data-hide="photographer"]').length < 1)
                $(".form__place-select select").append(
                    '<option data-hide="photographer" value="Online">Online</option>'
                );
            break;
        case "Tutor Bahasa Inggris":
            bodyFieldTooltip.find(".is--photograph-content").addClass("is--hidden");
            bodyFieldTooltip.find(".is--teacher-content").removeClass("is--hidden");
            bodyFieldTooltip.removeClass("is--hidden");
            citySelectDrodown.addClass("form__field-hide");
            citySelectDrodown.find('select').removeAttr("data-required");
            subjectField.attr(
                "placeholder",
                "Misalnya, mempersiapkan ujian bahasa Inggris"
            );
            bodyField.attr(
                "placeholder",
                "Contoh: Mempersiapkan siswa tingkat akhir untuk ujian bahasa Inggris yang akan datang. Tujuannya adalah untuk mendapatkan nilai minimal 85 dalam ujian tersebut."
            );
            moneyRadioFields.each(function(i, el) {
                if ($(el).attr("data-teacher") != "true") {
                    $(el).addClass("hidden");
                    $(el)
                        .find("input")
                        .removeAttr("data-required")
                        .prop("checked", false);
                } else {
                    $(el).removeClass("hidden");
                    if ($(".form__money-field").val()) {
                        $(el).find("input").attr("data-required", "true");
                    }
                }
            });
            if ($('option[data-hide="photographer"]').length < 1)
                $(".form__place-select select").append(
                    '<option data-hide="photographer" value="Online">Online</option>'
                );
            break;
    }

    if (moneyRadioFields.length)
        moneyRadioFields
        .closest("[data-text-input]")
        .find(".input")
        .trigger("focusout");
});

$("[data-text-input]").each(function() {
    const field = $(this).find(".input");
    const radio = $(this).find('[type="radio"]');
    const dropdown = $(this);
    const dropdownLabel = dropdown.find('[fs-selectcustom-element="label"]');
    const dropdownLabelText = dropdownLabel.text();
    var radioValue = "";

    if ($(this).find('[type="radio"]').length) {
        radio.each(function() {
            $(this).on("click", function() {
                var value = field.val();

                if (field.hasClass("form__money-field")) {
                    value = value + " Rp";
                }

                radioValue = $(this).val();

                if (radioValue) {
                    value = value + " / " + radioValue;
                    dropdownLabel.text(value);
                }
            });
        });
    }

    field.on("focusout", function() {
        var value = field.val();
        if (value) {
            if (field.hasClass("form__money-field")) {
                value = value + " Rp";
            }
            if (radio.length) {
                radioValue = radio.filter(":checked").val();
            }
            if (radioValue) {
                value = value + " / " + radioValue;
            }
            dropdownLabel.text(value);
        } else {
            dropdownLabel.text(dropdownLabelText);
        }
    });
});
$('[data-select="location"]').on("change", function() {
    var location = $(this).val();
    if (location == "Online") {
        $('[data-field="address"]').addClass("form__field-hide");
        $('[data-field="address"] input').removeAttr("data-required");
    } else {
        $('[data-field="address"]').removeClass("form__field-hide");
        $('[data-field="address"] input').attr("data-required", "true");
    }
});
