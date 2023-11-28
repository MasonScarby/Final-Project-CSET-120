document.addEventListener('DOMContentLoaded', function () {
    var menuSelect = document.getElementById('menu-select');
    var descriptionCard = document.getElementById('description-card');
    var entreesMenu = document.getElementById('entrees-menu');
    var dessertsMenu = document.getElementById('desserts-menu');
    var drinksMenu = document.getElementById('drinks-menu');

    // Descriptions for each menu item
    var descriptions = {
        'Grilled Salmon with Lemon-Dill Sauce': 'Fresh salmon fillet grilled to perfection and topped with a zesty lemon-dill sauce. Served with a side of seasonal roasted vegetables.',
        'Mushroom and Truffle Risotto': 'Creamy Arborio rice cooked with a medley of mushrooms and a touch of truffle oil. Garnished with Parmesan cheese and fresh herbs.',
        'Chicken Marsala':'Sautéed chicken breasts in a Marsala wine reduction sauce, served with garlic mashed potatoes and sautéed green beans.',
        'Vegetarian Thai Green Curry':'A fragrant and flavorful Thai green curry with mixed vegetables and tofu, served over jasmine rice.',
        'Filet Mignon with Red Wine Reduction':'A tender filet mignon steak cooked to your liking, accompanied by a rich red wine reduction. Served with garlic butter asparagus.',
        'Shrimp Scampi Linguine':'Succulent shrimp sautéed in garlic and butter, tossed with linguine and finished with fresh parsley.',
        'Spinach and Feta Stuffed Chicken Breast':'Chicken breast stuffed with spinach and feta cheese, baked to perfection and served with quinoa pilaf.',
        'Vegetable Lasagna':'Layers of pasta, ricotta cheese, and a variety of roasted vegetables, baked in marinara sauce.',
        'Beef and Broccoli Stir-Fry':'Sliced beef and broccoli florets stir-fried in a savory soy-based sauce, served over steamed jasmine rice.',
        'Lobster Ravioli with Creamy Tomato Basil Sauce':'Lobster-filled ravioli served with a creamy tomato and basil sauce, garnished with Parmesan cheese.',
        'Classic Tiramisu':'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
        'Molten Chocolate Lava Cake':'A warm and gooey chocolate cake with a molten chocolate center, served with a scoop of vanilla bean ice cream.',
        'Strawberry Cheesecake':'Creamy New York-style cheesecake topped with fresh strawberry compote.',
        'Crème Brûlée':'Vanilla bean custard with a perfectly caramelized sugar crust.',
        'Warm Apple Pie with Cinnamon Ice Cream':'A classic apple pie with a buttery crust, served warm and accompanied by a scoop of cinnamon-infused ice cream.',
        'Chocolate Fondue Platter':'A selection of fresh fruits, marshmallows, and cake bites served with a rich chocolate fondue.',
        'Panna Cotta with Raspberry Coulis':'Silky vanilla bean panna cotta topped with a tart raspberry coulis.',
        'Key Lime Pie':'A tangy and refreshing key lime pie with a graham cracker crust.',
        'Chocolate Mousse Tower':'Layers of velvety chocolate mousse served in a tall tower, garnished with chocolate shavings.',
        'Affogato':'Vanilla gelato or ice cream drowned in a shot of hot espresso, creating a delightful combination of hot and cold.',
        'Mango Basil Sparkler':'Fresh mango puree mixed with basil-infused simple syrup and sparkling water.',
        'Cucumber Mint Cooler':'Refreshing cucumber and mint infused water with a splash of lime juice.',
        'Passionfruit Mojito':'A tropical twist on the classic mojito, featuring passionfruit puree, fresh mint, and rum.',
        'Espresso Martini':'A delightful blend of vodka, coffee liqueur, and freshly brewed espresso, served with a coffee bean garnish.',
        'Berry Bliss Smoothie':'A blend of mixed berries, Greek yogurt, and a touch of honey for a delicious and healthy treat.'
    };

    var isDragging = false;
    var offset = { x: 0, y: 0 };

    menuSelect.addEventListener('change', function () {
        var selectedMenu = menuSelect.value;

        entreesMenu.style.display = 'none';
        dessertsMenu.style.display = 'none';
        drinksMenu.style.display = 'none';

        if (selectedMenu === 'entrees') {
            entreesMenu.style.display = 'block';
        } else if (selectedMenu === 'desserts') {
            dessertsMenu.style.display = 'block';
        } else if (selectedMenu === 'drinks') {
            drinksMenu.style.display = 'block';
        }
    });

    function showModal(description, imageUrl) {
        // Update the description card content
        document.getElementById('description-title').innerText = description;
        document.getElementById('description-text').innerText = descriptions[description] || "Description not available.";

        // Display the description card
        descriptionCard.style.display = 'block';
        descriptionCard.classList.add('user-drag-none');
    }

    // Function to close the description card
    window.closeDescription = function () {
        descriptionCard.style.display = 'none';
    };

    descriptionCard.addEventListener('mousedown', function (e) {
        isDragging = true;
        offset = { x: e.clientX - descriptionCard.offsetLeft, y: e.clientY - descriptionCard.offsetTop };
        descriptionCard.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;

        var x = e.clientX - offset.x;
        var y = e.clientY - offset.y;

        // Check boundaries to prevent going outside the page
        x = Math.max(0, Math.min(x, window.innerWidth - descriptionCard.offsetWidth));
        y = Math.max(0, Math.min(y, window.innerHeight - descriptionCard.offsetHeight));

        descriptionCard.style.left = x + 'px';
        descriptionCard.style.top = y + 'px';
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
        descriptionCard.style.cursor = 'grab';
    });

    var mealPhotos = document.querySelectorAll('.meal-photo img');

    mealPhotos.forEach(function (photo) {
        photo.addEventListener('click', function () {
            var description = this.alt;
            var imageUrl = this.src;
            showModal(description, imageUrl);
        });
    });
});
  // Function to add the item to the cart
  function addToCart() {}
    // You can implement the logic to add the item to the cart here
    // For now, let's just log a message to the console