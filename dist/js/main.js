"use strict";

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  document.querySelector(".menu-btn").addEventListener("click", toogleMenu);
}

function toogleMenu() {
  var useSvgNode = document.querySelector("#toggle-menu__icon");
  var hrefId = useSvgNode.getAttribute("xlink:href");
  var menuList = document.querySelector(".menu-list");
  if (hrefId === "#menu-burger") useSvgNode.setAttribute("xlink:href", "#menu-close");
  if (hrefId === "#menu-close") useSvgNode.setAttribute("xlink:href", "#menu-burger");
  menuList.classList.toggle("menu-list--show");
}

function initMap() {
  var sedona = {
    lat: 34.870,
    lng: -111.760
  };
  var map = new google.maps.Map(document.querySelector("#map"), {
    center: sedona,
    zoom: 8
  });
  var iconMarker = "img/map-marker.svg";
  var marker = new google.maps.Marker({
    icon: iconMarker,
    position: sedona,
    map: map
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZHkiLCJxdWVyeVNlbGVjdG9yIiwidG9vZ2xlTWVudSIsInVzZVN2Z05vZGUiLCJocmVmSWQiLCJnZXRBdHRyaWJ1dGUiLCJtZW51TGlzdCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImluaXRNYXAiLCJzZWRvbmEiLCJsYXQiLCJsbmciLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImljb25NYXJrZXIiLCJtYXJrZXIiLCJNYXJrZXIiLCJpY29uIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxLQUE5Qzs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2JGLEVBQUFBLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixXQUF2QixFQUNLRixnQkFETCxDQUNzQixPQUR0QixFQUMrQkcsVUFEL0I7QUFFSDs7QUFFRCxTQUFTQSxVQUFULEdBQXNCO0FBQ2xCLE1BQU1DLFVBQVUsR0FBR0wsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQUFuQjtBQUNBLE1BQU1HLE1BQU0sR0FBR0QsVUFBVSxDQUFDRSxZQUFYLENBQXdCLFlBQXhCLENBQWY7QUFDQSxNQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUVBLE1BQUlHLE1BQU0sS0FBSyxjQUFmLEVBQ0lELFVBQVUsQ0FBQ0ksWUFBWCxDQUF3QixZQUF4QixFQUFzQyxhQUF0QztBQUNKLE1BQUlILE1BQU0sS0FBSyxhQUFmLEVBQ0lELFVBQVUsQ0FBQ0ksWUFBWCxDQUF3QixZQUF4QixFQUFzQyxjQUF0QztBQUVKRCxFQUFBQSxRQUFRLENBQUNFLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLGlCQUExQjtBQUNIOztBQUVELFNBQVNDLE9BQVQsR0FBbUI7QUFDZixNQUFJQyxNQUFNLEdBQUc7QUFBQ0MsSUFBQUEsR0FBRyxFQUFFLE1BQU47QUFBY0MsSUFBQUEsR0FBRyxFQUFFLENBQUM7QUFBcEIsR0FBYjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JuQixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEIsRUFBb0Q7QUFDMURpQixJQUFBQSxNQUFNLEVBQUVQLE1BRGtEO0FBRTFEUSxJQUFBQSxJQUFJLEVBQUU7QUFGb0QsR0FBcEQsQ0FBVjtBQUlBLE1BQUlDLFVBQVUsR0FBRyxvQkFBakI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsSUFBSU4sTUFBTSxDQUFDQyxJQUFQLENBQVlNLE1BQWhCLENBQXVCO0FBQ2hDQyxJQUFBQSxJQUFJLEVBQUVILFVBRDBCO0FBRWhDSSxJQUFBQSxRQUFRLEVBQUViLE1BRnNCO0FBR2hDRyxJQUFBQSxHQUFHLEVBQUVBO0FBSDJCLEdBQXZCLENBQWI7QUFLSCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlYWR5KVxyXG5cclxuZnVuY3Rpb24gcmVhZHkoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b29nbGVNZW51KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b29nbGVNZW51KCkge1xyXG4gICAgY29uc3QgdXNlU3ZnTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVfX2ljb25cIik7XHJcbiAgICBjb25zdCBocmVmSWQgPSB1c2VTdmdOb2RlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7XHJcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXHJcblxyXG4gICAgaWYgKGhyZWZJZCA9PT0gXCIjbWVudS1idXJnZXJcIilcclxuICAgICAgICB1c2VTdmdOb2RlLnNldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIiwgXCIjbWVudS1jbG9zZVwiKVxyXG4gICAgaWYgKGhyZWZJZCA9PT0gXCIjbWVudS1jbG9zZVwiKVxyXG4gICAgICAgIHVzZVN2Z05vZGUuc2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiLCBcIiNtZW51LWJ1cmdlclwiKVxyXG4gICAgXHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwibWVudS1saXN0LS1zaG93XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICB2YXIgc2Vkb25hID0ge2xhdDogMzQuODcwLCBsbmc6IC0xMTEuNzYwfTtcclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFwXCIpLCB7XHJcbiAgICAgICAgY2VudGVyOiBzZWRvbmEsXHJcbiAgICAgICAgem9vbTogOFxyXG4gICAgfSk7XHJcbiAgICB2YXIgaWNvbk1hcmtlciA9IFwiaW1nL21hcC1tYXJrZXIuc3ZnXCI7XHJcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgaWNvbjogaWNvbk1hcmtlcixcclxuICAgICAgICBwb3NpdGlvbjogc2Vkb25hLFxyXG4gICAgICAgIG1hcDogbWFwLFxyXG4gICAgfSlcclxufSJdLCJmaWxlIjoibWFpbi5qcyJ9
