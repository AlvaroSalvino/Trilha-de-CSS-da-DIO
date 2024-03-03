/** accordion function */
function openAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion button");

    if (accordionList.length) {

        function open() {
            this.classList.toggle("accordion-open");
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', open);
        })

    }

}

(() => {
    openAccordion();
})()

for i in Range(3):
    novo_item = input()
    itens.append(novo_item)

print("Lista de itens:")
for item in itens:
    print(f"- {itens}")