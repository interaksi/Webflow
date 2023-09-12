//console.log("test");

var Webflow = Webflow || [];
Webflow.push(function () {
  const tempId = $("html").attr("data-wf-page");
  $("[data-cms-modal]").click(function () {
    let link = $(this).find(".hidden-link").attr("href") + " #content";
    $("[data-remodal-id=modal]").remodal().open();
    $("#load-wrapper").load(link, function (response, status, xhr) {
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
        $(".next-cms").click(function () {
          $("#load-wrapper").empty();
          card.next().find(`.hidden-link`).click();
        });

        //Prev page
        $(".prev-cms").click(function () {
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

  $(document).on("closed", ".remodal", function (e) {
    console.log("empty");
    $("#load-wrapper").empty();
  });
});

$(document).ready(function () {
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

// ---------------------------------------------------

// var Webflow = Webflow || [];
// Webflow.push(function () {
//   const tempId = $("html").attr("data-wf-page");
//   $("[data-cms-modal]").click(function () {
//     let link = $(this).find(".hidden-link").attr("href") + " #content";
//     $("[data-remodal-id=modal]").remodal().open();
//     $("#load-wrapper").load(link, function (response, status, xhr) {
//       if (status == "success") {
//         window.Webflow && window.Webflow.destroy();
//         window.Webflow && window.Webflow.ready();
//         window.Webflow && window.Webflow.require("ix2").init();
//         document.dispatchEvent(new Event("readystatechange"));
//       }
//     });
//   });

//   $(document).on("closed", ".remodal", function (e) {
//     $(this).find("#load-wrapper").empty();
//   });
// });

//--------------------------------------------------------

//  ÐœÐ°ÑÐºÐ° Ð´Ð»Ñ Ð¸Ð½Ð¿ÑƒÑ‚Ð¾Ð² (Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½)
// function addInputPhoneMask() {
//   const phoneInputs = document.querySelectorAll(".form__phone-field");
//   const regExp = /\D/g;
//   const getInputNumbersValue = (input) => input.value.replace(regExp, "");

//   const onInputHandler = (event) => {
//     const input = event.target;
//     let inputNumbersValue = getInputNumbersValue(input);
//     let formattedInputValue = "";
//     let prevRawNumber = "";
//     // Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸ Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ñ‡Ð¸ÑÐ»ÐµÐ½Ð½Ñ‹Ñ… Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ð¹
//     let prevNumberCaretPosition = 0;
//     // ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð²Ñ‹Ð´ÐµÐ»ÐµÐ½Ð½Ñ‹Ñ… ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð² Ð² Ñ€ÐµÐ½Ð¶Ðµ
//     let selectedNumberCount = 0;
//     const { selectionEnd, selectionStart } = input;

//     if (!inputNumbersValue) {
//       input.value = "";
//       return;
//     }

//     if (input.value.length !== selectionStart) {
//       if (event.data && regExp.test(event.data)) {
//         input.value = inputNumbersValue;
//       }
//     }
//     var inputSelectionStart = selectionStart,
//       inputSelectionEnd = selectionEnd;
//     if (
//       ["0"].indexOf(inputNumbersValue[0]) > -1 ||
//       inputNumbersValue.startsWith("62")
//     ) {
//       const firstSymbols =
//         inputNumbersValue[0] == "0" || inputNumbersValue.startsWith("62")
//           ? "+62"
//           : "+";

//       if (firstSymbols == "+62" && inputNumbersValue.length < 2) {
//         inputNumbersValue = "62";
//       } else if (inputNumbersValue.startsWith("08")) {
//         inputNumbersValue = 6 + inputNumbersValue.replaceAt(0, "2");
//       }

//       formattedInputValue = `${firstSymbols}`;

//       const isMobilePhone = inputNumbersValue.startsWith("628") ? true : false;

//       if (isMobilePhone) {
//         if (inputNumbersValue.length > 2) {
//           formattedInputValue += ` (${inputNumbersValue.substring(2, 5)}`;
//         }
//         if (inputNumbersValue.length >= 6) {
//           formattedInputValue += `) ${inputNumbersValue.substring(5, 8)}`;
//         }
//         if (inputNumbersValue.length >= 9) {
//           if (inputNumbersValue.length <= 11)
//             formattedInputValue += `-${inputNumbersValue.substring(8, 11)}`;
//           else if (
//             inputNumbersValue.length <= 12 &&
//             inputNumbersValue.length >= 11
//           )
//             formattedInputValue += `-${inputNumbersValue.substring(8, 12)}`;
//           else if (
//             inputNumbersValue.length <= 13 &&
//             inputNumbersValue.length >= 12
//           )
//             formattedInputValue += `-${inputNumbersValue.substring(
//               8,
//               10
//             )}-${inputNumbersValue.substring(10, 13)}`;
//         }
//         if (inputNumbersValue.length >= 11 && inputNumbersValue.length <= 13) {
//           input.classList.add("valid");
//         } else {
//           input.classList.remove("valid");
//         }
//         if (inputNumbersValue.length >= 14) {
//           formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
//         }
//       } else {
//         if (inputNumbersValue.length > 2) {
//           formattedInputValue += `-${inputNumbersValue.substring(2, 4)}`;
//         }
//         if (inputNumbersValue.length >= 5) {
//           formattedInputValue += `-${inputNumbersValue.substring(4, 7)}`;
//         }
//         if (inputNumbersValue.length >= 8) {
//           formattedInputValue += `-${inputNumbersValue.substring(7, 11)}`;
//         }
//         if (inputNumbersValue.length >= 12) {
//           formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
//         }
//         if (inputNumbersValue.length >= 9 && inputNumbersValue.length <= 11) {
//           input.classList.add("valid");
//         } else {
//           input.classList.remove("valid");
//         }
//       }
//     } else {
//       formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
//     }

//     // Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð¼ Ð½Ð¾Ð²Ð¾Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸
//     const newCaretPosition = getNewCaretPosition(
//       inputNumbersValue,
//       formattedInputValue
//     );

//     // Ð·Ð°Ð¿Ð¸ÑÑ‹Ð²Ð°ÐµÐ¼ Ð½Ð¾Ð²Ð¾Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ
//     input.value = formattedInputValue;

//     // ÑƒÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÐ¼ ÐºÐ°Ñ€ÐµÑ‚ÐºÑƒ
//     input.setSelectionRange(newCaretPosition, newCaretPosition);
//   };

//   const onKeyDownHanler = (event) => {
//     const input = event.target;
//     const inputValue = input.value.replace(/\D/g, "");
//     const DELETE_KEY_CODE = 8;
//     if (event.keyCode === DELETE_KEY_CODE && inputValue.length === 1) {
//       input.value = "";
//     }
//   };

//   const onPasteHandler = (event) => {
//     const input = event.target;
//     const inputNumbersValue = getInputNumbersValue(input);
//     const pasted = event.clipboardData || window.Clipboard;
//     if (pasted) {
//       const pastedText = pasted.getData("Text");
//       if (regExp.test(pastedText)) {
//         input.value = inputNumbersValue;
//       }
//     }
//   };

//   const onFocusSelectionEnd = (event) => {
//     const input = event.target;
//     if (!input.classList.contains("focus"))
//       setTimeout(() => {
//         input.selectionStart = input.value.length;
//       }, 100);
//     input.classList.add("focus");
//   };

//   const onFocusoutSelectionEnd = (event) => {
//     const input = event.target;
//     input.classList.remove("focus");
//   };

//   const onBeforeInput = (event) => {
//     // ÐµÑÐ»Ð¸ Ð²Ñ‹Ð´ÐµÐ»Ð¸Ð»Ð¸ ÑÐºÐ¾Ð»ÑŒÐºÐ¾-Ñ‚Ð¾ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð², ÑÐ½Ð°Ñ‡Ð°Ð»Ð° Ð±ÐµÑ€ÐµÐ¼ Ð²ÑÐµ ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ‹ Ð² Ð²Ñ‹Ð´ÐµÐ»ÐµÐ½Ð¸Ð¸ Ð¸ ÑƒÐ±Ð¸Ñ€Ð°ÐµÐ¼ Ð¿Ñ€Ð¾Ð±ÐµÐ»Ñ‹
//     // Ñ‚Ð°Ðº Ð¼Ñ‹ Ð¿Ð¾Ð¹Ð¼ÐµÐ¼ ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ñ†Ð¸Ñ„Ñ€ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ð»Ð¾ÑÑŒ
//     // Ð½Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ window.getSelection(), Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð² ÑÑ‚Ð¾Ñ‚ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚ Ð¾Ð½Ð¾ ÑƒÐ¶Ðµ ÑÑ…Ð»Ð¾Ð¿Ð½ÑƒÐ»Ð¾ÑÑŒ
//     selectedNumberCount = Math.abs(
//       event.target.value
//         .slice(event.target.selectionStart, event.target.selectionEnd)
//         .replace(/\s/g, "").length
//     );

//     // ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÐµÐ¼ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰ÐµÐµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ Ð¸Ð½Ð¿ÑƒÑ‚Ð° Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð° Ð±ÐµÐ· ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²
//     prevRawNumber = event.target.value.replace(/\D/g, "");

//     // Ð±ÐµÑ€ÐµÐ¼ Ð²ÑÐµ Ñ‡Ð¸ÑÐ»Ð° Ð´Ð¾ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸
//     prevNumberCaretPosition = event.target.value
//       .slice(0, event.target.selectionStart)
//       .replace(/\D/g, "").length;
//   };

//   const getNewCaretPosition = (newRawNumber, maskedValue) => {
//     // Ð¼Ð°ÑÑÐ¸Ð² Ð½Ð¾Ð¼ÐµÑ€Ð° Ñ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð°Ð¼Ð¸
//     const maskedValueArray = maskedValue.split("");

//     // Ñ‚ÐµÐºÑƒÑ‰ÐµÐµ Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸
//     let caretPosition = 0;

//     // Ð¿Ð¾Ð»ÑƒÑ‡Ð°ÐµÐ¼ Ð¶ÐµÐ»Ð°ÐµÐ¼Ð¾Ðµ Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸, Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ ÑÑ‚Ñ€Ð¾ÐºÐ¸ Ð½Ð¾Ð¼ÐµÑ€Ð° Ð±ÐµÐ· Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ
//     const newCaretPosition =
//       prevNumberCaretPosition +
//       (newRawNumber.length - prevRawNumber.length + selectedNumberCount);

//     // Ð°ÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¸Ð½Ð´ÐµÐºÑ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¸ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸, Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾Ð¹ ÑÑ‚Ñ€Ð¾ÐºÐ¸
//     let i;

//     // Ð¸Ñ‚ÐµÑ€Ð¸Ñ€ÑƒÐµÐ¼ Ð¿Ð¾ ÑÑ‚Ñ€Ð¾ÐºÐµ Ñ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð°Ð¼Ð¸
//     for (i = 0; i <= maskedValueArray.length - 1; i++) {
//       // ÐµÑÐ»Ð¸ Ð¼Ñ‹ Ð´Ð¾ÑÑ‚Ð¸Ð³Ð»Ð¸ Ð¶ÐµÐ»Ð°ÐµÐ¼Ð¾Ð¹ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¸ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸
//       if (caretPosition === newCaretPosition) {
//         // Ð²ÐµÑ€Ð½ÐµÐ¼ Ð¸Ð½Ð´ÐµÐºÑ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð° Ñ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ
//         return i;
//       }

//       /**
//        * Ð•ÑÐ»Ð¸ ÑÑ‚Ð¾ Ð½Ðµ ÑÐ¸Ð¼Ð²Ð¾Ð», Ñ‚Ð¾ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°ÐµÐ¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ¸.
//        * ÐœÑ‹ Ñ‚Ð¾Ñ‡Ð½Ð¾ Ð·Ð½Ð°ÐµÐ¼ Ð½Ð° ÐºÐ°ÐºÐ¾Ð¼ Ñ‡Ð¸ÑÐ»Ðµ Ð½Ð°Ñ…Ð¾Ð´Ð¸Ð»Ð°ÑÑŒ ÐºÐ°Ñ€ÐµÑ‚ÐºÐ°,
//        * Ð¸ Ð¿Ð¾ÑÐ»Ðµ ÐºÐ°ÐºÐ¾Ð³Ð¾ Ñ‡Ð¸ÑÐ»Ð° Ð¾Ð½Ð° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð²ÑÑ‚Ð°Ñ‚ÑŒ
//        */
//       if (/\d/.test(maskedValueArray[i])) {
//         ++caretPosition;
//       }
//     }

//     // ÐµÑÐ»Ð¸ Ð½Ðµ Ð½ÑƒÐ¶Ð½Ð¾ Ð´Ð²Ð¸Ð³Ð°Ñ‚ÑŒ ÐºÐ°Ñ€ÐµÑ‚ÐºÑƒ
//     return i;
//   };

//   phoneInputs.forEach((input) => {
//     input.addEventListener("input", onInputHandler, false);
//     input.addEventListener("keydown", onKeyDownHanler);
//     input.addEventListener("paste", onPasteHandler, false);
//     input.addEventListener("focus", onFocusSelectionEnd, false);
//     input.addEventListener("focusout", onFocusoutSelectionEnd, false);
//     input.addEventListener("beforeinput", onBeforeInput, false);
//   });
// }

// String.prototype.replaceAt = function (index, char) {
//   return this.substr(0, index) + char + this.substr(index + 1, this.length);
// };

// addInputPhoneMask();

const emailInputs = document.querySelectorAll(".form__email-field");
const moneyInputs = document.querySelectorAll(".form__money-field");

//Ð—Ð°Ð¿Ñ€ÐµÑ‚ Ð²Ð²Ð¾Ð´Ð° Ñ†Ð¸Ñ„Ñ€ Ð² Ð¿Ð¾Ð»Ðµ Ð¸Ð¼ÐµÐ½Ð¸
emailInputs.forEach((input) => {
  input.addEventListener("keypress", function (e) {
    //console.log(e);
    //console.log(e.keyCode);
    if (
      e.keyCode != 8 &&
      e.keyCode != 46 &&
      (input.value.length > 49 || (e.key && e.key.match(/[^0-9a-zA-Z-_@.-\s]/)))
    )
      return e.preventDefault();
  });
  input.addEventListener("input", function (e) {
    //console.log(e);
    if (e.inputType == "insertFromPaste") {
      // ÐÐ° ÑÐ»ÑƒÑ‡Ð°Ð¹, ÐµÑÐ»Ð¸ ÑƒÐ¼ÑƒÐ´Ñ€Ð¸Ð»Ð¸ÑÑŒ Ð²Ð²ÐµÑÑ‚Ð¸ Ñ‡ÐµÑ€ÐµÐ· ÐºÐ¾Ð¿Ð¸Ð¿Ð°ÑÑ‚ Ð¸Ð»Ð¸ Ð°Ð²Ñ‚Ð¾-Ð´Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ.
      input.value = input.value
        .replace(/[^0-9a-zA-Z-_@.-\s]/g, "")
        .slice(0, 50);
    }
  });
});

//Ð—Ð°Ð¿Ñ€ÐµÑ‚ Ð²Ð²Ð¾Ð´Ð° Ð±ÑƒÐºÐ² Ð² Ð¿Ð¾Ð»Ðµ Ð´ÐµÐ½ÐµÐ³
moneyInputs.forEach((input) => {
  //input.setAttribute('pattern', new RegExp('\d*'));
  input.addEventListener("keypress", function (e) {
    if (e.key && e.key.match(/[^0-9.]/)) return e.preventDefault();
    input.value = formatNumber(input.value);
    if (input.value.length) {
      toggleRequiredRadioMoney(true);
    } else {
      toggleRequiredRadioMoney(false);
    }
  });
  input.addEventListener("input", function (e) {
    // ÐÐ° ÑÐ»ÑƒÑ‡Ð°Ð¹, ÐµÑÐ»Ð¸ ÑƒÐ¼ÑƒÐ´Ñ€Ð¸Ð»Ð¸ÑÑŒ Ð²Ð²ÐµÑÑ‚Ð¸ Ñ‡ÐµÑ€ÐµÐ· ÐºÐ¾Ð¿Ð¸Ð¿Ð°ÑÑ‚ Ð¸Ð»Ð¸ Ð°Ð²Ñ‚Ð¾-Ð´Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ.
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

// Ð’Ð°Ð»Ð¸Ð´Ð°Ñ†Ð¸Ñ Ñ„Ð¾Ñ€Ð¼
function removeErrorClassOnInput(input) {
  const currentForm = input.closest("form");
  input.addEventListener("input", () => {
    input.classList.remove("form__field-error");
    var dropdownInputWrapper = input.closest(".select-category");
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
    const { value, dataset } = input;
    input.classList.remove("form__field-error");

    // if (input.classList.contains("form__phone-field")) {
    //   if (!input.classList.contains("valid")) {
    //     input.classList.add("form__field-error");
    //     isValid = false;
    //   }
    // }

    if (dataset.required === "true") {
      var dropdownInputWrapper = input.closest(".select-category"),
        isTypeSelect = input.classList.contains("form__type-select"),
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
  today.getMonth() + 1 < 10
    ? "0" + (today.getMonth() + 1)
    : today.getMonth() + 1;
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
        ym(93740751,'reachGoal','findPerfLead')
      }
      return true;
    } else {
      form.querySelector(".submit-button").value = "Kirim permintaan";
      return false;
    }
  };

  inputs.forEach((input) => {
    const isRequiredInput = input.getAttribute("data-required");
    if (isRequiredInput) {
      removeErrorClassOnInput(input);
    }
  });

  $(formClassName).submit(onSubmitHandler);
}

if ($("#wf-form-Make-request-form").length) {
  checkValidationFormOnSubmit("#wf-form-Make-request-form", true);
  $("#wf-form-Make-request-form").attr("novalidate", "");
}

if ($("#wf-form-BecomePerformerForm").length) {
  checkValidationFormOnSubmit("#wf-form-BecomePerformerForm", false);
  $("#wf-form-BecomePerformerForm").attr("novalidate", "");
}

$('[data-select="form-type"]').on("change", function () {
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
      subjectField.attr("placeholder", "Misalnya, pemotretan pernikahan");
      bodyField.attr(
        "placeholder",
        "Contoh: pemotretan pernikahan di luar kota di pedesaan. Rencana waktu yang dibutuhkan adalah sekitar 3 jam untuk fotografer ditambah perjalanan."
      );
      if ($('[data-hide="photographer"]').length) {
        $('[data-hide="photographer"]').each(function () {
          $(this).remove();
        });
      }
      moneyRadioFields.each(function (i, el) {
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
      subjectField.attr("placeholder", "Misalnya, seorang ilustrator");
      bodyField.attr(
        "placeholder",
        "Contoh: Pesanannya adalah mengilustrasikan buku cerita anak-anak. Anda membutuhkan 20 gambar dengan detail sedang. Cat air, guas atau tinta."
      );
      moneyRadioFields.each(function (i, el) {
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
      subjectField.attr(
        "placeholder",
        "Misalnya, mempersiapkan ujian bahasa Inggris"
      );
      bodyField.attr(
        "placeholder",
        "Contoh: Mempersiapkan siswa tingkat akhir untuk ujian bahasa Inggris yang akan datang. Tujuannya adalah untuk mendapatkan nilai minimal 85 dalam ujian tersebut."
      );
      moneyRadioFields.each(function (i, el) {
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

$("[data-text-input]").each(function () {
  const field = $(this).find(".input");
  const radio = $(this).find('[type="radio"]');
  const dropdown = $(this);
  const dropdownLabel = dropdown.find('[fs-selectcustom-element="label"]');
  const dropdownLabelText = dropdownLabel.text();
  var radioValue = "";

  if ($(this).find('[type="radio"]').length) {
    radio.each(function () {
      $(this).on("click", function () {
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

  field.on("focusout", function () {
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
$('[data-select="location"]').on("change", function () {
  var location = $(this).val();
  if (location == "Online") {
    $('[data-field="address"]').addClass("form__field-hide");
    $('[data-field="address"] input').removeAttr("data-required");
  } else {
    $('[data-field="address"]').removeClass("form__field-hide");
    $('[data-field="address"] input').attr("data-required", "true");
  }
});
