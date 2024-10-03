// Função para abrir o modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Função para filtrar empresas
function filterCompanies() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    const companies = document.getElementById("companyList").getElementsByTagName("li");

    for (let i = 0; i < companies.length; i++) {
        let companyName = companies[i].textContent.toLowerCase();
        if (companyName.includes(searchValue)) {
            companies[i].style.display = "";
        } else {
            companies[i].style.display = "none";
        }
    }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}

// Lógica para adicionar uma nova empresa ao salvar o formulário
document.getElementById('createCompanyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const companyName = document.getElementById('companyName').value;
    const newCompany = document.createElement('li');
    newCompany.textContent = companyName;

    document.getElementById('companyList').appendChild(newCompany);

    closeModal();
});
