package apiServer

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGetAllProjects(t *testing.T) {
	// Создаем новый запрос с пустыми параметрами
	req, err := http.NewRequest("GET", "/allProjects", nil)
	if err != nil {
		t.Fatal(err)
	}

	// Создаем новый объект записи ответа
	rr := httptest.NewRecorder()

	// Вызываем функцию-обработчик с новым запросом и объектом записи ответа
	handler := http.HandlerFunc(getAllProjects)
	handler.ServeHTTP(rr, req)

	// Проверяем код состояния, возвращаемый функцией-обработчиком
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Проверяем тело ответа, возвращаемое функцией-обработчиком
	expected := "{\"Projects\":[],\"PageInfo\":{\"currentPage\":1,\"pageCount\":0,\"projectsCount\":0}}\n"
	if rr.Body.String() != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}
