export const indexHtmlTemplate = (content)=>`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JS Diploma Andrey</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/static/client.js" type="application/javascript"></script>
  <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
</head>
<body>
<!--Max, [21.07.20 17:12]-->
<!--  Делаю диплом по js, реализовал загрузку фотографий с помощью fetch и async / await.-->
<!--  Собственно, рендерится интерфейс страницы, и сразу после должны загрузиться первые 10 фотографий.-->
<!--  Можно конечно рендерить блок с фотографиями после выполнения async функции, но тогда придётся делать блоку с фотографиями и всему остальному разный стор,-->
<!--  чтобы остальной интерфейс не ждал загрузки с сервера. Пока единственное, до чего я додумался, зарендерить скрытую кнопку, сделать ей автофокус и повесить-->
<!--  обработчик onFocus-->

<!--  Aleksandr ¯\\_(ツ)_/¯ Kuznetsov, [21.07.20 17:12]-->
<!--  Все проще. Ты можешь рендерить контейнер только если маунт произошел. В Курсе вот Реакт мы делаем хук в одно из уроков useIsMounted с объяснением как работает.-->
<!--  Можно применить аналог. Далее отрендерить сам контейнер когда произошел mount и в нем запросить данные.-->
<!--  Итого:-->
<!--  1) Контейнер который грузит фотографии, внутри dispatch(loadFirstTenPhoto)-->
<!--  2) Контейнер из пункта один загружается после componentDidMount родителя или с помощью хука-->
<!--  3) По факту рендера контейнер из пункта 1 запускает загрузку.-->
<!--  Важно что-бы контейнер из п. 1 рендерился только один раз. Или написать такой action / запрос которые проверяет наличие первых 10 фото в сторе-->
<!--  Факт рендера контейнера проще отследить/прервать, нежели просто запрос в didMount.-->
<!--  Особенно удобно если юзать hooks и просто React.useEffect(() =>, []) загрузить что-нибудь-->

<!--  Max, [21.07.20 17:19]-->
<!--  Ок, благодарю) почитаю про хуки и жизненный цикл. Проверка у меня идёт по параметру page в сторе, который при загрузке равен нулю, и потом увеличивается на единицу-->

<!--  Aleksandr ¯\\_(ツ)_/¯ Kuznetsov, [21.07.20 17:20]-->
<!--  Чуть лучше смотреть на количество самих фото, чем на сопутсвующий параметр.-->
<!--  Page может быть не равен нулю по какой-то причине и тогда картинки сразу не загрузятся.-->
<!--  Если проверять на кол-во картинок то сама ошибка с их «не загрузкой» будет не возможна.-->
<!--  Это типо всякие исключающие состояния-->
    <div id="react_root">${content}</div>
</body>
</html>
`;