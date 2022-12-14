import { useEffect } from "react";

const Map = () => {
  // const { kakao } = window;

  // var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  // var options = {
  //   //지도를 생성할 때 필요한 기본 옵션
  //   center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //   level: 3, //지도의 레벨(확대, 축소 정도)
  // };

  // var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  const { kakao } = window;

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(37.500892, 127.027498),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
    });

    console.log("loading kakao map");
  });

  // const container = document.getElementById("map");
  // const options = {
  //   center: new kakao.maps.LatLng(37.500892, 127.027498),
  //   level: 3,
  // };

  // const map = new kakao.maps.Map(container, options);

  return (
    <div id="root">
      <div id="map" className="bg-cyan-400 w-full h-80"></div>
    </div>
  );
};

export default Map;
