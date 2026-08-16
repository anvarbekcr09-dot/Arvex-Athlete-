import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes

TOKEN = os.getenv("BOT_TOKEN")

MENU = [
    [InlineKeyboardButton("🏠 Uy mashqlari", callback_data="home"),
     InlineKeyboardButton("🏋️ Gym", callback_data="gym")],
    [InlineKeyboardButton("📅 7 kunlik reja", callback_data="week"),
     InlineKeyboardButton("🍗 Ovqatlanish", callback_data="food")],
    [InlineKeyboardButton("🏆 Challenge", callback_data="challenge"),
     InlineKeyboardButton("👤 Profilim", callback_data="profile")]
]

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "🔥 ARVEX ATHLETE\n\nXush kelibsiz! Kerakli bo'limni tanlang.",
        reply_markup=InlineKeyboardMarkup(MENU)
    )

async def button(update: Update, context: ContextTypes.DEFAULT_TYPE):
    q = update.callback_query
    await q.answer()
    texts = {
        "home":"🏠 Uy mashqlari\n\n• Push-up 3×10\n• Squat 3×15\n• Plank 30 soniya",
        "gym":"🏋️ Gym mashqlari\n\n• Bench Press 4×10\n• Squat 4×10\n• Shoulder Press 4×10",
        "week":"📅 7 kunlik reja\n\nDush: Ko'krak\nSesh: Oyoq\nChor: Kardio\nPay: Yelka\nJum: Orqa\nShan: Full Body\nYak: Dam",
        "food":"🍗 Oqsil: vazn × 1.8 g\n💧 Suv: 2.5–3 L",
        "challenge":"🏆 Beast Mode\n\n100 Squat\n50 Push-up\n2 daqiqa Plank",
        "profile":"👤 Profil\n\nBu bo'lim V2 da to'liq ishlaydi."
    }
    back = InlineKeyboardMarkup([[InlineKeyboardButton("⬅️ Menyu", callback_data="menu")]])
    if q.data=="menu":
        await q.edit_message_text("🔥 ARVEX ATHLETE\n\nMenyu:", reply_markup=InlineKeyboardMarkup(MENU))
    else:
        await q.edit_message_text(texts[q.data], reply_markup=back)

app = Application.builder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.add_handler(CallbackQueryHandler(button))
app.run_polling()
