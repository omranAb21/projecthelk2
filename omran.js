function showInfo(button) {
    var row = button.closest('tr');
    var name = row.querySelector('.contact-name').textContent;
    var age = row.querySelector('.contact-age').textContent;
    var phone = row.querySelector('.contact-phone').textContent;
    var address = row.querySelector('.contact-address').textContent;

    document.getElementById('infoName').textContent = name;
    document.getElementById('infoAge').textContent = age;
    document.getElementById('infoPhone').textContent = phone;
    document.getElementById('infoAddress').textContent = address;

    document.getElementById('infoModal').style.display = 'block';
}

function closeInfo() {
    document.getElementById('infoModal').style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeInfo();
    }
}

function openAddContactModal() {
    document.getElementById('addContactModal').style.display = 'block';
}

function closeAddContactModal() {
    document.getElementById('addContactModal').style.display = 'none';
}

function openEditContactForm(button) {
    var row = button.closest('tr');
    document.getElementById('editContactName').value = row.querySelector('.contact-name').textContent;
    document.getElementById('editContactAge').value = row.querySelector('.contact-age').textContent;
    document.getElementById('editContactPhone').value = row.querySelector('.contact-phone').textContent;
    document.getElementById('editContactAddress').value = row.querySelector('.contact-address').textContent;
    document.getElementById('editContactIndex').value = row.rowIndex;

    document.getElementById('editContactContainer').style.display = 'block';
}

function closeEditContactForm() {
    document.getElementById('editContactContainer').style.display = 'none';
}

function deleteContact(button) {
    var row = button.closest('tr');
    row.remove();
}

function deleteAllContacts() {
    var table = document.getElementById('contactList');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

document.getElementById('addContactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('contactNameInput').value;
    var age = document.getElementById('contactAgeInput').value;
    var phone = document.getElementById('contactPhoneInput').value;
    var address = document.getElementById('contactAddressInput').value;

    var table = document.getElementById('contactList').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    row.classList.add('contact-item');
    row.innerHTML = `
        <td>
          <div class="contact-image-name">
            <img src="/images/google_contacts_logo.webp" alt="Contact Image" class="contact-image">
            <span class="contact-name">${name}</span>
            <span class="contact-age" style="display:none;">${age}</span>
            <span class="contact-phone" style="display:none;">${phone}</span>
            <span class="contact-address" style="display:none;">${address}</span>
          </div>
        </td>
        <td>
          <button class="info-button" onclick="showInfo(this)">פרטים</button>
          <button class="edit-button" onclick="openEditContactForm(this)">עריכה</button>
          <button class="delete-button" onclick="deleteContact(this)">מחק</button>
        </td>
    `;

    closeAddContactModal();
});
function searchContacts() {
    var searchQuery = document.getElementById('search').value.toLowerCase();
    var contacts = document.querySelectorAll('#contactList .contact-item');

    contacts.forEach(function (contact) {
        var name = contact.querySelector('.contact-name').textContent.toLowerCase();
        var phone = contact.querySelector('.contact-phone').textContent.toLowerCase();
        var address = contact.querySelector('.contact-address').textContent.toLowerCase();

        if (name.includes(searchQuery) || phone.includes(searchQuery) || address.includes(searchQuery)) {
            contact.style.display = '';
        } else {
            contact.style.display = 'none';
        }
    });
}




document.getElementById('editContactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var index = document.getElementById('editContactIndex').value;
    var name = document.getElementById('editContactName').value;
    var age = document.getElementById('editContactAge').value;
    var phone = document.getElementById('editContactPhone').value;
    var address = document.getElementById('editContactAddress').value;

    var row = document.getElementById('contactList').rows[index];
    row.querySelector('.contact-name').textContent = name;
    row.querySelector('.contact-age').textContent = age;
    row.querySelector('.contact-phone').textContent = phone;
    row.querySelector('.contact-address').textContent = address;

    closeEditContactForm();
});
