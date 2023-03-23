document.getElementById('delete-button').addEventListener('click', function () {
    document.getElementById('delete-product').style.display = 'none';
})
document.getElementById('delete-confirm').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'red';
})
document.getElementById('delete-confirm').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
})

document.getElementById('delete-confirm').addEventListener('keyup', function (product) {
    const deleteField = document.getElementById('delete-confirm');
    const deleteButton = document.getElementById('delete-button');

    if (product.target.value == 'DELETE_PRO_25612') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteField.setAttribute('disable', true);
    }
})