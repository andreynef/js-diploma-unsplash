const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack'); //уже есть в вебпаке
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV ==='development';
const IS_PROD = NODE_ENV ==='production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

setupDevtool = () =>{
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}


module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {//замена зависимости. Когда требуется то что слева, заменяется на то что справа
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',//реакт дом заменяется на пропатченный реакт дом, чтобы обновляться на горячую.(дев режим)
        }
    },
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),//входной файл. Там, где App render in root. После этого модуля добавляем строку ниже
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',//js код кот б добавлен в index.jsx в конец. Path указывает путь до нового сервера. Настройка запросов к серверу кот б отдавать данные с hmr.
        ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),//выходной путь
        filename: 'client.js',//выходной файл
        publicPath: "/static/",//путь по кот б доступны наши статические ассеты chunks с файлами для hmr
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader']//встраивание с пом него в бандл.
            },
            {
                test: /\.css$/,
                use: [//действие справа налево, сначала css потом style, потом сверху в бандл.
                    'style-loader',//style
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {//все css файлы воспринимаются как модули
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',//маркировка названий сгенерированных стилей
                            }
                        }
                    },//css
                ],
                exclude: GLOBAL_CSS_REGEXP // все css кроме GLOBAL_CSS_REGEXP (= main.global.css в папке src). Их обработка б отдельным обычн способом, ниже.
            },
            {
                test: GLOBAL_CSS_REGEXP,// матчить только их. И тжсм сделать в серверной чести но без style
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    devtool: setupDevtool(),//''eval or false в зависимоости от NODE_ENV ('development' или 'production')
    plugins: IS_DEV//запускать плагин в зависимости от режима.
        ? [//если development, то весь набор
        new CleanWebpackPlugin(),//удаление старых сгенерированных chunks при генерации новых js файлов при каждом изменении кода
        new HotModuleReplacementPlugin(),
        ]
        : [],//иначе не юзать никаких плагинов
};

