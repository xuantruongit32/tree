const listFriend = document.querySelectorAll(".list");
const mutualFriend = document.querySelectorAll(".list p");
const friendsListHeading = document.getElementById("friendsList");

for (let i = 0; i < listFriend.length; i++) {
  listFriend[i].addEventListener("mousemove", () => {
    mutualFriend[i].style.visibility = "visible";
  });
  listFriend[i].addEventListener("mouseleave", () => {
    mutualFriend[i].style.visibility = "hidden";
  });
}
friendsListHeading.textContent = `Friends List (${listFriend.length})`;
