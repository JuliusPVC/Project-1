function submitAni()
{
	// parseInt changes a string into a true number. IMPORTANT!
	var userAni = parseInt(document.querySelector("input[name='Verts']:checked").value);
	var useraniTwo= parseInt(document.querySelector("input[name='CFShop']:checked").value);
	var useraniThree= parseInt(document.querySelector("input[name='Transport']:checked").value);
	var useraniFour= parseInt(document.querySelector("input[name='Weekend']:checked").value);
	var useraniFive= parseInt(document.querySelector("input[name='OS']:checked").value);
	var useraniSix= parseInt(document.querySelector("input[name='Content']:checked").value);
	var useraniSeven= parseInt(document.querySelector("input[name='Apple']:checked").value);
	var useraniEight= parseInt(document.querySelector("input[name='Drug']:checked").value);
	var useraniNine= parseInt(document.querySelector("input[name='Audio']:checked").value);
	var useraniTen= parseInt(document.querySelector("input[name='Response']:checked").value);
	// concatenates your answers into a string and displays it on the page
	document.querySelector(".aniResponse").innerHTML = "Your selection: " + userAni + "," + useraniTwo;

// add up all our answers and displays it in the console
console.log(userAni + useraniTwo + useraniThree + useraniFour + useraniFive + useraniSix + useraniSeven + useraniEight + useraniNine + useraniTen);


	var sumofTotal = (userAni + useraniTwo + useraniThree + useraniFour + useraniFive + useraniSix + useraniSeven + useraniEight + useraniNine + useraniTen);

// If statements that produce the different answers depending on the user's score.
if (sumofTotal >= 1 && sumofTotal <= 32)
{
	document.write("<p> You are an Eggroll! Eggrolls are made in shells and are usually filled with meat and other small ingredients. Kinda like a human! But not like a vegan of course, those are a different type of creature. After all the ingredients are put onto the wrap, they're rolled into an enclosed shell type thing. Just like introverts, living their life in a shell. The other ingredients that are not meat could most likely be thought of as your family or small, inner-circle of friends. </p>");
}
else if (sumofTotal >= 33 && sumofTotal <= 61)
{
	document.write("<p> You are Fried Rice! Fried Rice are typically made in large groups of individual rice grains. This means that you are constantly close with others and are open to be the the type of person that makes logical sense to have with every dish! </p>");
}
else if(sumofTotal >= 62 && sumofTotal <= 101)
{
	document.write("<p> You're some kind of vegan dish! As exciting as the exclamation point might make it seem, vegan dishes in Asian culture are a special type of dish. Mostly because Asians eat mostly animals. You prefer the environment and the animals that live in it rather than living/treating yourself. </p>");
}
}