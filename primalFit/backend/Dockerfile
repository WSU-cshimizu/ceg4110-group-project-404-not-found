FROM python:3

WORKDIR /usr/src

RUN apt-get update \
  && apt-get -y install netcat-traditional gcc postgresql \
  && apt-get clean

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./entrypoint.sh /usr/src/chat-app/entrypoint.sh
RUN chmod +x /usr/src/chat-app/entrypoint.sh

COPY . .