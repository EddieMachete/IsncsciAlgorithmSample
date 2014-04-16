/* Copyright 2014 Rick Hansen Institute
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
var _loaded = false;
var _ready = true;

$(function () {
    _loaded = true;
    if (_ready) { Run(); }
});

function SciReady(e) {
    _ready = true;
    if (_loaded) { Run(); }
}

function Run() {
    var controller = new sci.neurology.NeurologyTestController();
    controller.Initialize($('body'));

    var pageActions = $('.page-actions');

    $(window).bind('scroll', function (e) {
        if ($(window).scrollTop() >= 45) {
            if (!pageActions.hasClass('fixed')) {
                pageActions.addClass('fixed');
            }
        } else if (pageActions.hasClass('fixed')) {
            pageActions.removeClass('fixed');
        }

        return true;
    });
}