var apForm = {
	target: document.getElementById( "wpcf7-f6997-p7307-o1" ),
}

apForm.input = {
	name: document.getElementsByName("your-name")[0],
	phone: document.getElementsByName("your-phone")[0],
	business: document.getElementsByName("your-business")[0],
	email: document.getElementsByName("your-email")[0],
	subject: document.getElementsByName("your-subject")[0],
	message: document.getElementsByName("your-message")[0]
};

apForm.icons = [
	"far fa-user",
	"far fa-phone",
	"",
	"far fa-envelope",
	"far fa-pencil",
	"far fa-pencil",
];


window.addEventListener("load", function(){
	apForm.Inserticon = function(Class){
		var container = document.createElement("i");
		var icon = `<i class="${Class}"></i>`;
		container.innerHTML = icon;
		return container;
	}


	Object.values(apForm.input).forEach(function(el, key){
		el.style.paddingLeft = "2.8rem";
		el.parentNode.style.position = "relative";
		el.parentNode.appendChild( apForm.Inserticon(apForm.icons[key]) )
	})

	apForm.input.name.placeholder = "Name *";
	apForm.input.phone.placeholder = "Business Phone";
	apForm.input.business.placeholder = "Business Name";

	apForm.input.email.placeholder = "Business E-mail";
	apForm.input.subject.placeholder = "Subject";
	apForm.input.message.placeholder = "Message";
})